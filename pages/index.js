import Head from "next/head";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ShoppingCart from "../components/common/ShoppingCart";
import Subscription from "../components/common/Subscription";
import CategoryShowcase from "../components/homepage/CategoryShowcase";
import HeroSection from "../components/homepage/HeroSection";
import SocialMedias from "../components/homepage/SocialMedias";
import Layout from "../components/Layout";
import commerce from "../lib/commerce";

export const getServerSideProps = async () => {
  const { data: categories } = await commerce.categories.list();

  return { props: { categories} };
};

export default function Home({ categories}) {
  const [cart,setCart]=useState({});

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
        <ShoppingCart cart={cart}/>
      </Layout>
    </>
  );
}
