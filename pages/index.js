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
import SuggestedProducts from "../components/individualProductPage/SuggestedProducts";
import ContactSection from "../components/homepage/ContactSection";

export const getStaticProps = async () => {
  const { data: categories } = await commerce.categories.list();
  const { data: weeklySpecials } = await commerce.products.list({
    category_slug: "weekly-specials",
  });
  return { props: { categories, weeklySpecials } };
};

export default function Home({ categories, weeklySpecials }) {
  const currentCartId = Cookies.get("commercejs_cart_id");
  const { cart, update } = useCart(currentCartId);

  return (
    <>
      <Layout>
        <Head>
          <title>Mochi's Bakery | Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroSection />
        <SuggestedProducts
          similarProducts={weeklySpecials}
          showHeading={false}
          shown={true}
        />
        <ContactSection showCaseProducts={weeklySpecials} />
        <Row className="mx-auto site-map">
          <Col xs={12} sm={6} className="py-4">
            <CategoryShowcase categories={categories} />
          </Col>
          <Col xs={12} sm={6} className="py-4">
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
