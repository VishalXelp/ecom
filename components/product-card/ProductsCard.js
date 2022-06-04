//component responsible for showing all for now (for later trending on home page)
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast, Slide } from "react-toastify";
import QuickView from "../Modal/QuickView";

class ProductsCard extends Component {
  state = {
    modalOpen: false,
    modalImage: "",
    discountPrice: 0,
    id: null,
    title: "",
    minItem: "",
  };
  handleAddToCart = (id) => {
    this.props.addToCart(id);

    toast.success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  handleModalData = (image, id, discountPrice , title , minItem ) => {
    this.setState({
      modalImage: image,
      id: id,
      discountPrice: discountPrice,
      title: title,
      minItem: minItem,
    });
  };
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    let { products } = this.props;
    const { modalOpen } = this.state;
    return (
      <React.Fragment>
        <ReactTooltip />
        <ToastContainer transition={Slide} />
        {products.map((data, idx ) => (
          <div className="col-lg-3 col-md-6 products-col-item" key={idx}>
            <div className="single-product-box">
              <div className="product-image">
                <a href={`/product/${data.id}`}>
                  <img
                    src={data.image}
                    height="220px"
                    width="262px"
                    alt="image"
                  />
                  <img
                    src={data.imageHover}
                    height="220px"
                    width="262px"
                    alt="image"
                  />
                </a>

                <ul>
                  <li>
                    <Link href="#">
                      <a
                        data-tip="Quick View"
                        data-place="left"
                        onClick={(e) => {
                       
                          e.preventDefault();
                          this.openModal();
                          this.handleModalData(
                            data.quickView,
                            data.id,
                            data.discountPrice,
                            data.title,
                            data.minItem
                            
                          );
                        }}
                      >
                        <i className="far fa-eye colorchange"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    {/* <Link href="#">
                      <a data-tip="Add to Wishlist" data-place="left">
                        <i className="far fa-heart"></i>
                      </a>
                    </Link> */}
                  </li>
                  {/* <li>
                                        <Link href="#">
                                            <a data-tip="Add to Compare" data-place="left">
                                                <i className="fas fa-sync"></i>
                                            </a>
                                        </Link>
                                    </li> */}
                </ul>
              </div>

              <div className="product-content">
                <div className="custom-holder">
                  <span className="custom-self" href="#">
                    {data.vendor}
                  </span>
                  <span className="custom-quanity">
                    {" "}
                    Min Quantity : {data.minItem}
                  </span>
                </div>

                <h3>
                  <a href={`/product/${data.id}`}>
                    {" "}
                    <div className="custom-title">{data.title} </div>{" "}
                  </a>
                </h3>

                <div className="price-holder">
                  <div className="price-holder2">
                    {" "}
                    <div className="new-price">
                      {" "}
                      &#8377; {data.discountPrice}
                    </div>
                    <div className="discount-price">&#8377; {data.price}</div>
                  </div>
                  {
                     
                     

                  }
                  <div className="percent-off">{ Math.round((data.price - data.discountPrice )/data.price * 100)}% off</div>
                </div>

                {/* <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>  */}

                <Link href="#">
                  <a
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleAddToCart(data.id);
                    }}
                  >
                    Add to Cart
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {modalOpen ? (
          <QuickView
            closeModal={this.closeModal}
            id={this.state.id}
            image={this.state.modalImage}
            discountPrice={this.state.discountPrice}
            title={this.state.title}
            minItem={this.state.minItem}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard);
