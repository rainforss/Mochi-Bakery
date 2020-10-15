import React from "react";
import Head from "next/head";
import commerce from "../../lib/commerce";
import Layout from "../../components/Layout";
import { Col, Container, Image, Row } from "react-bootstrap";
import ShoppingCart from "../../components/common/ShoppingCart";
import Cookies from "js-cookie";
import useCart from "../../hooks/useCart";
import ProductDetail from "../../components/individualProductPage/ProductDetail";
import CustomerReviews from "../../components/individualProductPage/CustomerReviews";

export const getServerSideProps = async (context) => {
  const product = await commerce.products.retrieve(context.params.permalink, {
    type: "permalink",
  });

  return { props: { product } };
};

const Product = ({ product }) => {
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
  return (
    <>
      <Layout>
        <Head>
          <title>{`Krystal's Bakery | ${product.name}`}</title>
        </Head>
        <Container className="item-display-body">
          <Row>
            <Col>
              <Image src={product.media.source} width="100%" />
            </Col>
            <Col>
              <ProductDetail product={product} />
            </Col>
          </Row>
        </Container>
        <CustomerReviews />
        <ShoppingCart cart={cart} />
      </Layout>
    </>
  );
};

export default Product;
