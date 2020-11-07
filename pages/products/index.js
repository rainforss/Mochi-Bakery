import Cookies from "js-cookie";
import useCart from "../../hooks/useCart";
import Head from "next/head";
import Layout from "../../components/Layout";
import commerce from "../../lib/commerce";
import WeeklySpecialSection from "../../components/productsPage/WeeklySpecialSection";
import ProductTab from "../../components/productsPage/ProductTab";
import ShoppingCart from "../../components/common/ShoppingCart";
import { toast } from "react-toastify";

export const getServerSideProps = async () => {
  const categories = commerce.categories.list();

  const allProducts = commerce.products.list();

  const results = await Promise.all([categories, allProducts]);

  return {
    props: {
      allProducts: results[1].data,
      categories: results[0].data,
    },
  };
};

const products = ({ allProducts, categories, blogs }) => {
  const weeklySpecials = allProducts.filter(
    (product) => product.categories[0].slug === "weekly-specials"
  );
  const inSeasonProducts = allProducts.filter(
    (product) => product.categories[0].slug !== "weekly-specials"
  );
  const currentCartId = Cookies.get("commercejs_cart_id");
  const { cart, update } = useCart(currentCartId);
  const addItemToCart = async (e) => {
    const updatedInfo = await commerce.cart.add(e.target.name, 1);
    update(
      {
        ...updatedInfo.cart,
      },
      false
    );
    toast("🦄 The item has been added to your cart!");
  };
  const emptyCart = async () => {
    const updatedInfo = await commerce.cart.empty();
    update({ ...updatedInfo.cart }, false);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Mochi's Bakery | Products</title>
        </Head>
        <WeeklySpecialSection
          weeklySpecials={weeklySpecials}
          addItemToCart={addItemToCart}
        />
        <ProductTab
          categories={categories}
          inSeasonProducts={inSeasonProducts}
          addItemToCart={addItemToCart}
        />
        <ShoppingCart cart={cart} emptyCart={emptyCart} />
      </Layout>
    </>
  );
};

export default products;
