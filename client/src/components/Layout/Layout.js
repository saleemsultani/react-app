import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, descriptions, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={descriptions} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app",
  description: "Mern stack project",
  keywords: "MERN,react,node,mongodb",
  author: "Saleem Sultani",
};

export default Layout;
