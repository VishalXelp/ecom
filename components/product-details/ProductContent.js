// imp page , product page content here
import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { addQuantityWithNumber } from "../../store/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SizeGuide from "./SizeGuide";
import Shipping from "./Shipping";
import LoginModal from "./loginModal";
import Router from 'next/router' 
import router from "next/router";

class ProductContent extends Component {
  state = {
    qty: parseInt(this.props.product.minItem),
    max: 10,
    min: 1,
    sizeGuide: false,
    shipModal: false,
    loginModal: false,
    userLogin: true,
    hreff : ""
  };

  handleAddToCartFromView = () => {
    this.props.addQuantityWithNumber(8, this.state.qty);
    toast.success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };



  //responsible for multiplication in cart item
  // IncrementItem = () => {
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + parseInt(this.props.product.minItem),
  //     };
  //   });
  // };

  // DecreaseItem = () => {
  //   this.setState((prevState) => {
  //     if (prevState.qty > 1) {
  //       return {
  //         qty: prevState.qty - this.props.product.minItem,
  //       };
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  IncrementItem = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.qty > parseInt(this.props.product.minItem)) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return toast.warn("Item cant be less than minimum item", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });
  };

  openSizeGuide = () => {
    this.setState({ sizeGuide: true });
  };

  closeSizeGuide = () => {
    this.setState({ sizeGuide: false });
  };

  openShipModal = () => {
    this.setState({ shipModal: true });
  };

  closeShipModal = () => {
    this.setState({ shipModal: false });
  };

  openLoginModal = () => {
    this.setState({ loginModal: true });
  };

  closeLoginModal = () => {
    this.setState({ loginModal: false });
  };

  render() {
    const { sizeGuide, shipModal, loginModal } = this.state;

    return (
      <React.Fragment>
        <div className="col-lg-6 col-md-6">
          <ToastContainer />
          <div className="product-details-content">
            <div className="alignment">
              <h3>{this.props.product.title}</h3>
              <div>
             
                <i onClick={() => {
                  toast.success("Added to Wishlist", {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                }} className="fas fa-heart"></i> 

                {/* <i className="fas fa-share"></i> */}
              </div>
            </div>

            <div className="price">
              <span className="product-new-price">
                {" "}
                &#x20b9; {this.props.product.price}{" "}
                <span style={{ color: "#27865f", fontSize: 16 }}>
                  {" "}
                  for each item
                </span>{" "}
              </span>
              <span className="percent-off-main">
                {" "}
                (
                {Math.round(
                  ((this.props.product.price -
                    this.props.product.discountPrice) /
                    this.props.product.price) *
                    100
                )}
                % off Discount !){" "}
              </span>
            </div>

            {/*
                        responsible for rating and stars
                         <div className="product-review">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <Link href="#">
                                <a className="rating-count">3 reviews</a>
                            </Link>
                        </div> */}
            <p>{this.props.product.about}</p>

            <ul className="product-info">
              <li>
                <span>Vendor:</span> <a href="#">{this.props.product.vendor}</a>
              </li>
              <li>
                <span>Product Type:</span>{" "}
                <a href="#">{this.props.product.type}</a>
              </li>
              <li>
                <span>Minimum Quantity:</span>{" "}
                <a className="minItem" href="#">
                  {this.props.product.minItem} items
                </a>
              </li>
              <li>
                <span>In Stock :</span>{" "}
                <a className="inStock" href="#">
                  {this.props.product.inStock} items
                </a>
              </li>
            </ul>

            {this.props.product.color !== null &&
            this.props.product.color !== undefined &&
            this.props.product.color === true ? (
              <div className="product-color-switch">
                <h4>Color:</h4>

                <ul>
                  <li>
                    <a href="#" title="Black" className="color-black"></a>
                  </li>
                  <li>
                    <a href="#" title="White" className="color-white"></a>
                  </li>
                  <li className="active">
                    <a href="#" title="Green" className="color-green"></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Yellow Green"
                      className="color-yellowgreen"
                    ></a>
                  </li>
                  <li>
                    <a href="#" title="Teal" className="color-teal"></a>
                  </li>
                </ul>
              </div>
            ) : null}

            {this.props.product.size !== null &&
            this.props.product.size !== undefined &&
            this.props.product.size === true ? (
            <div className="product-size-wrapper">
              <h4>Size:</h4>

              <ul>
                <li>
                  <a href="#">XS</a>
                </li>
                <li className="active">
                  <a href="#">S</a>
                </li>
                <li>
                  <a href="#">M</a>
                </li>
                <li>
                  <a href="#">XL</a>
                </li>
                <li>
                  <a href="#">XXL</a>
                </li>
              </ul>
            </div> ):  null } 

            <div className="product-info-btn pt-30">
              <Link href="#">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    this.openSizeGuide();
                  }}
                >
                  <i className="fas fa-crop"></i> Size guide
                </a>
              </Link>
              <Link href="#">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    this.openShipModal();
                  }}
                >
                  <i className="fas fa-truck"></i> Shipping
                </a>
              </Link>
              {/* <a
                onClick={(e) => {
                  e.preventDefault();

                  this.openLoginModal();
                }}
              >
                <i className="far fa-envelope"></i> Login to buy
              </a> */}
            </div>

            <div className="product-add-to-cart">
              <div className="input-counter">
                <span className="minus-btn" onClick={this.DecreaseItem}>
                  <i className="fas fa-minus"></i>
                </span>
                <input
                  type="text"
                  value={this.state.qty}
                  // min={this.state.min}
                  // max={this.state.max}
                  onChange={(e) => this.setState({ qty: e.target.value })}
                />
                <span className="plus-btn" onClick={this.IncrementItem}>
                  <i className="fas fa-plus"></i>
                </span>
              </div>

              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  this.userLogin
                    ? this.openLoginModal()
                    : toast.success("Added to Cart", {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                      });
                }}
              >
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>

            <div className="wishlist-compare-btn">
              <a
                onClick={() => {
                  toast.success("Added to Wishlist", {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                }}
                className="btn btn-light"
              >
                <i className="far fa-heart">
        </i> Add to Wishlist
              </a>
              {/* <a href="#" className="btn btn-light"><i className="fas fa-balance-scale"></i> Add to Compare</a> */}
            </div>

            <div className="buy-checkbox-btn">
              <div className="item">
                <input className="inp-cbx" id="cbx" type="checkbox" />
                <label className="cbx" htmlFor="cbx">
                  <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>I agree with the terms and conditions</span>
                </label>
              </div>

              <div className="item">
              
             
                <a
                  className="btn btn-primary"
                  onClick={ (e) =>{
    e.preventDefault();
    { console.log(this.userLogin)
    true ? 
      this.openLoginModal()
     : router.push('/checkout') }
     
}
}
                >
                  Buy it now!
                </a>
              
              </div>
            </div>
          </div>
        </div>
        {sizeGuide ? <SizeGuide closeSizeGuide={this.closeSizeGuide} /> : ""}
        {shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : ""}
        {loginModal ? (
          <LoginModal closeLoginModal={this.closeLoginModal} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(addQuantityWithNumber(id, qty));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductContent);
