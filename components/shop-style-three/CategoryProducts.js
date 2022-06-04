import React, { Component } from 'react';
import Link from 'next/link';

class CategoryProducts extends Component {
    render() {
        return (
            <section className="category-products-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="single-category-box">
                                <img src={require("../../assets/images/imagez.jpg")}  width="359" height="430" alt="image" />

                                <div className="category-content">
                                    <h3>Our Popular Products</h3>
                                    <Link href="#">
                                        <a className="btn btn-light">View More</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-category-box">
                                        <img src={require("../../assets/images/image59.jpg")}  width="349" height="215"  alt="image" />
            
                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-category-box">
                                        <img src={require("../../assets/images/image55.jpeg")} width="349" height="215"  alt="image" />
            
                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-category-box">
                                        <img src={require("../../assets/images/image56.jpg")} width="750" height="180" alt="image" />
            
                                        <div className="category-content">
                                            <h3>Up to 75% OFF Spring Sale!</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoryProducts;
