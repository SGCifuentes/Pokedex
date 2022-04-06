import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../Layout";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default Home;
