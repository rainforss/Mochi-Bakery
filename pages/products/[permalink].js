import React from "react";
import Head from "next/head";
import commerce from "../../lib/commerce";
import Layout from "../../components/Layout";
import { Image } from "react-bootstrap";

export const getServerSideProps = async (context) => {
  const product = await commerce.products.retrieve(context.params.permalink, {
    type: "permalink",
  });
  console.log(product);

  return { props: { product } };
};

const Product = ({ product }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Krystal's Bakery | ${product.name}`}</title>
        </Head>
        <Image src={product.media.source} width="500" />
        <div>{product.name}</div>
      </Layout>
    </>
  );
};

export default Product;
