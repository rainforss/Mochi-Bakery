import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import Cookies from "js-cookie";
import useCart from "../hooks/useCart";
import ShoppingCart from "../components/common/ShoppingCart";
import Subscription from "../components/common/Subscription";
import CategoryShowcase from "../components/homepage/CategoryShowcase";
import HeroSection from "../components/homepage/HeroSection";
import SocialMedias from "../components/homepage/SocialMedias";
import Layout from "../components/Layout";
import commerce from "../lib/commerce";

export const getServerSideProps = async () => {
  const { data: categories } = await commerce.categories.list();

  return { props: { categories } };
};

export default function Home({ categories }) {
  const currentCartId = Cookies.get("commercejs_cart_id");
  const { cart, update } = useCart(currentCartId);

  const emptyCart = async () => {
    const updatedInfo = await commerce.cart.empty();
    console.log(updatedInfo);
    update({ ...updatedInfo.cart }, false);
  };
  return (
    <>
      <Layout>
        <Head>
          <title>Krystal's Bakery | Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroSection />
        <Row className="w-75 mx-auto">
          <Col>
            <CategoryShowcase categories={categories} />
          </Col>
          <Col>
            <SocialMedias />
          </Col>
          <Col>
            <Subscription />
          </Col>
        </Row>
        <ShoppingCart cart={cart} emptyCart={emptyCart} />
      </Layout>
    </>
  );
}
