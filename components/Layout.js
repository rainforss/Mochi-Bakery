import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best cake shop in Edmonton specialized in trending cakes and sweets"
        />
        <meta name="title" property="og:title" content="Mochi's Bakery" />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/rainforss/image/upload/v1603652748/website/mochibakery_gnkzft.png"
        />
        <meta
          name="description"
          property="og:description"
          content="Best cake shop in Edmonton specialized in trending cakes and sweets"
        />
        <meta name="author" content="Jake Chen" />
      </Head>
      <div className="body">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
