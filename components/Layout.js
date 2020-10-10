import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
