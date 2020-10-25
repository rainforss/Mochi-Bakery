import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import CartItemList from "../components/cartPage/CartItemList";
import commerce from "../lib/commerce";
import serverCookies from "cookies";
import useSWR from "swr";
import { toast } from "react-toastify";
import CartControl from "../components/cartPage/CartControl";
import SuggestedProducts from "../components/individualProductPage/SuggestedProducts";
import PriceSection from "../components/cartPage/PriceSection";

export const getServerSideProps = async ({ req, res }) => {
  const cookies = new serverCookies(req, res);

  const initialCart = await commerce.cart.retrieve(
    cookies.get("commercejs_cart_id")
  );

  const recommendedProducts = await commerce.products.list({
    category_slug: "weekly-specials",
  });

  return { props: { initialCart, recommendedProducts } };
};

const cart = ({ initialCart, recommendedProducts }) => {
  const { data: similarProducts } = useSWR(
    `https://api.chec.io/v1/products?category_slug=weekly-specials`,
    {
      initialData: { ...recommendedProducts },
    }
  );

  const currentCartId = Cookies.get("commercejs_cart_id");
  // const { cart, update } = useCart(currentCartId);
  const { data, error, mutate } = useSWR(
    `https://api.chec.io/v1/carts/${currentCartId}`,
    {
      initialData: { ...initialCart },
    }
  );
  if (error) return error.message;
  if (!data) return "Loading";
  const cart = { ...data };

  const removeItem = async (e) => {
    const line_item_id = e.target.name;
    const updatedInfo = await commerce.cart.remove(line_item_id);
    mutate({ ...updatedInfo.cart }, false);
    toast.dark("🦄 The item has been removed from your cart!");
  };
  const changeQuantity = async (e) => {
    const line_item_id = e.target.name;
    const newQuantity = e.target.value;
    //Deep clone of the data object, this works when data object does not have methods. Without deep clone, the following operation would modify data directly since the copy would have the reference to the original data object
    const copy = JSON.parse(JSON.stringify(data));
    const index = copy.line_items.findIndex((item) => item.id === line_item_id);
    copy.line_items[index].quantity = parseInt(newQuantity);
    copy.line_items[index].line_total.raw = parseInt(
      newQuantity * copy.line_items[index].price.raw
    );

    mutate(
      {
        ...copy,
      },
      false
    );
    await commerce.cart.update(line_item_id, {
      quantity: newQuantity,
    });
    mutate(
      {
        ...copy,
      },
      true
    );
  };

  const emptyCart = async () => {
    const updatedInfo = await commerce.cart.empty();
    mutate({ ...updatedInfo.cart }, false);
    toast.dark("🦄 All items has been removed from your cart!");
  };

  console.log(cart);
  return (
    <Layout>
      <Head>
        <title>Mochi's Bakery | Shopping cart</title>
      </Head>

      <CartItemList
        cart={cart}
        removeItem={removeItem}
        onChange={changeQuantity}
      />

      <SuggestedProducts
        similarProducts={similarProducts.data}
        showHeading={false}
        shown={cart.total_items === 0}
      />
      <PriceSection cart={cart} />
      <CartControl emptyCart={emptyCart} shown={cart.total_items !== 0} />
    </Layout>
  );
};

export default cart;
