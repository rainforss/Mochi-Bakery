import React from "react";
import Head from "next/head";
import commerce from "../../lib/commerce";
import Layout from "../../components/Layout";
import { Col, Container, Image, Row } from "react-bootstrap";
import ShoppingCart from "../../components/common/ShoppingCart";
import Cookies from "js-cookie";
import useCart from "../../hooks/useCart";
import useSWR from "swr";
import ProductDetail from "../../components/individualProductPage/ProductDetail";
import CustomerReviews from "../../components/individualProductPage/CustomerReviews";
import SuggestedProducts from "../../components/individualProductPage/SuggestedProducts";
import { toast } from "react-toastify";
import useContentful from "../../hooks/useContentful";

export const getServerSideProps = async (context) => {
  const product = await commerce.products.retrieve(context.params.permalink, {
    type: "permalink",
  });

  const reviews = await useContentful().getEntries({
    content_type: "review",
    "fields.permalink": context.params.permalink,
  });

  return { props: { product, reviews } };
};

const Product = ({ product, reviews }) => {
  let similarProducts;
  const { data, error, mutate } = useSWR(
    `https://api.chec.io/v1/products?category_slug=${product.categories[0].slug}`
  );
  if (error) {
    console.log(error.message);
  }
  if (!data) {
    similarProducts = [];
  } else {
    similarProducts = data.data.filter((item) => item.id !== product.id);
  }

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
  return (
    <>
      <Layout>
        <Head>
          <title>{`Mochi's Bakery | ${product.name}`}</title>
        </Head>
        <Container className="item-display-body">
          <Row>
            <Col sm={6} className="my-4">
              <Image src={product.media.source} width="100%" />
            </Col>
            <Col sm={6} className="my-4">
              <ProductDetail product={product} addItemToCart={addItemToCart} />
            </Col>
          </Row>
        </Container>
        <CustomerReviews reviews={reviews} />
        <SuggestedProducts
          similarProducts={similarProducts}
          showHeading={true}
          shown={true}
        />
        <ShoppingCart cart={cart} />
      </Layout>
    </>
  );
};

export default Product;
