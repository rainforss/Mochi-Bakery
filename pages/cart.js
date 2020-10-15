import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import useCart from "../hooks/useCart";
import CartItemList from "../components/cartPage/CartItemList";
import commerce from "../lib/commerce";
import serverCookies from "cookies";
import useSWR from "swr";

export const getServerSideProps = async ({ req, res }) => {
  const cookies = new serverCookies(req, res);

  const initialCart = await commerce.cart.retrieve(
    cookies.get("commercejs_cart_id")
  );

  return { props: { initialCart } };
};

const cart = ({ initialCart }) => {
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
  };
  const changeQuantity = async (e) => {
    const line_item_id = e.target.name;
    const newQuantity = e.target.value;
    //Deep clone of the data object, this works when data object does not have methods. Without deep clone, the following operation would modify data directly since the copy would have the reference to the original data object
    const copy = JSON.parse(JSON.stringify(data));
    const index = copy.line_items.findIndex((item) => item.id === line_item_id);
    copy.line_items[index].quantity = parseInt(newQuantity);

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
  return (
    <Layout>
      <Head>
        <title>Krystal's Bakery | Shopping cart</title>
      </Head>
      <CartItemList
        cart={cart}
        removeItem={removeItem}
        onChange={changeQuantity}
      />
    </Layout>
  );
};

export default cart;
