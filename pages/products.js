import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import commerce from "../lib/commerce";
import WeeklySpecialSection from "../components/productsPage/WeeklySpecialSection";
import ProductTab from "../components/productsPage/ProductTab";
import ShoppingCart from "../components/common/ShoppingCart";

export const getServerSideProps = async () => {

  const { data: categories } = await commerce.categories.list();

  const {data:allProducts}= await commerce.products.list();

  return { props: { allProducts, categories } };
};

const products = ({ allProducts, categories }) => {
  const weeklySpecials = allProducts.filter(product=>product.categories[0].slug==="weekly-specials")
  const inSeasonProducts = allProducts.filter(product=>product.categories[0].slug!=="weekly-specials")
  return (
    <>
      <Layout>
        <Head>
          <title>Krystal's Bakery | Products</title>
        </Head>
        <WeeklySpecialSection weeklySpecials={weeklySpecials} />
        <ProductTab categories={categories} inSeasonProducts={inSeasonProducts}/>
        <ShoppingCart />
      </Layout>
    </>
  );
};

export default products;
