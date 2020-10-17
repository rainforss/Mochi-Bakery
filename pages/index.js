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

export const getStaticProps = async () => {
  const { data: categories } = await commerce.categories.list();

  return { props: { categories } };
};

export default function Home({ categories }) {
  const currentCartId = Cookies.get("commercejs_cart_id");
  const { cart, update } = useCart(currentCartId);

  return (
    <>
      <Layout>
        <Head>
          <title>Krystal's Bakery | Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroSection />
        <Row className="mx-auto site-map">
          <Col xs={6} md={6}>
            <CategoryShowcase categories={categories} />
          </Col>
          <Col xs={6} md={6}>
            <SocialMedias />
          </Col>
          {/* <Col md={12}>
            <Subscription />
          </Col> */}
        </Row>
        <ShoppingCart cart={cart} />
      </Layout>
    </>
  );
}
