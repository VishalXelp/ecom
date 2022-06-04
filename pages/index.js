import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import CategoryProducts from "../components/shop-style-three/CategoryProducts";
import TrendingProducts from "../components/shop-style-three/TrendingProducts";
import Testimonials from "../components/Common/Testimonials";
import Footer from "../components/Layout/Footer";
import AddsModal from "../components/Modal/AddsModal";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <CategoryProducts />
        <TrendingProducts />
        <Testimonials />
        <Footer />
        <AddsModal />
      </React.Fragment>
    );
  }
}

export default Index;
