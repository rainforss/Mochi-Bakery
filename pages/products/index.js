import Cookies from "js-cookie";
import useCart from "../../hooks/useCart";
import Head from "next/head";
import Layout from "../../components/Layout";
import commerce from "../../lib/commerce";
import WeeklySpecialSection from "../../components/productsPage/WeeklySpecialSection";
import ProductTab from "../../components/productsPage/ProductTab";
import ShoppingCart from "../../components/common/ShoppingCart";

export const getServerSideProps = async () => {
  const { data: categories } = await commerce.categories.list();

  const { data: allProducts } = await commerce.products.list();

  return { props: { allProducts, categories } };
};

const products = ({ allProducts, categories }) => {
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
        ...cart,
        total_items: updatedInfo.cart.total_items,
        line_items: updatedInfo.cart.line_items,
      },
      false
    );
  };
  const emptyCart = async () => {
    const updatedInfo = await commerce.cart.empty();
    update({ ...updatedInfo.cart }, false);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Krystal's Bakery | Products</title>
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
