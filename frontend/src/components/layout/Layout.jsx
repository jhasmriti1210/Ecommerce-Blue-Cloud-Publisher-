import React from "react";
import Header from "./Headerhome";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        {children}
        <Toaster />
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "GupShap",
  description: "mern stack app",
  keywords: "Social media, chatting, technology, conversation",
  author: "Smriti Jha",
};

export default Layout;
