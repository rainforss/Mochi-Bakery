import React from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';



const cart = () => {
    return (
        <Layout>
        <Head>
          <title>Krystal's Bakery | Shopcart</title>
        </Head>
            <div>Shopping Cart</div>
        </Layout>
    );
};

export default cart;