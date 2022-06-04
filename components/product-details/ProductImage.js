import React, { Component } from 'react';
import Slider from "react-slick";

class ProductImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

    renderSliderMainImages = () => {
        return (
        this.props.product.images.map(({id, image}) => {
            // DEFAULT_PROPS.map(({id, image}) => {
            // console.log(this.props.product.images);
            return (
                <div key={id}>
                    <div className="item">
                        <img src={image} width="400" height="500" alt="image" />
                    </div>
                </div>
            )
        })
        );
    }

    renderSliderSubImages = () => {
        return this.props.product.images.map(({id, image}) => {
            // return DEFAULT_PROPS.map(({id, image}) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={image}  alt="image" />
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="col-lg-6 col-md-6">
                <div className="products-page-gallery">
                    <div className="product-page-gallery-main">
                       <div>
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                            >
                                {
                                    this.renderSliderMainImages()
                                }
                            </Slider>
                       </div>
                    </div>

                    <div className="product-page-gallery-preview">
                        <div>
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}
                            dots={false}
                        >
                            {
                                this.renderSliderSubImages()
                            }
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductImage;
