import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import ReactTooltip from "react-tooltip";
import Link from "next/link";
import QuickView from "../Modal/QuickView";

function CategoryList(props) {
  const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(true);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [id, setId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [title, settitle] = useState("");
  const [minItem, setminItem] = useState("");

  useEffect(() => setDisplay(true), []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalData = (image, id, discountPrice, title, minItem) => {
    setModalImage(image);
    setId(id);
    setDiscountPrice(discountPrice);
    settitle(title);
    setminItem(minItem);
  };

  return (
    <section className="trending-products-area pb-60">
      <ReactTooltip />
      <ToastContainer transition={Slide} />
      <div className="container">
        <div className="section-title without-bg">
          <h2></h2>
        </div>

        <div className="row">
          <React.Fragment>
            <ReactTooltip />
            <ToastContainer transition={Slide} />
            {props.product.map((data, idx) => (
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
                              openModal();
                              handleModalData(
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
                    <div className="custom-self">
                      <div className="custom-holder">
                        <span href="#"> {data.vendor}</span>
                        <span className="custom-quanity">
                          {" "}
                          Min Quantity : {data.minItem}
                        </span>
                      </div>
                    </div>

                    <h3>
                      <a href={`/products/${data.id}`}>
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
                        <div className="discount-price">
                          &#8377; {data.price}
                        </div>
                      </div>

                      <div className="percent-off">
                        {Math.round(
                          ((data.price - data.discountPrice) / data.price) * 100
                        )}
                        % off
                      </div>
                    </div>

                    <Link href="#">
                      <a
                        className="btn btn-light"
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
                closeModal={closeModal}
                id={id}
                image={modalImage}
                discountPrice={discountPrice}
                title={title}
                minItem={minItem}
              />
            ) : (
              ""
            )}
          </React.Fragment>
        </div>
      </div>
    </section>
  );
}

export default CategoryList;

// const data = {
//     categories: [
//       { id: "1", name: "Furniture & Home Decor" , ref:"furniture-home" },
//       { id: "2", name: "Pet Supplies" , ref:"pet-supplies" },
//       { id: "3", name: "Garden & Outdoor", ref:"garden-outdoor" },
//       { id: "4", name: "Cleaning & Storage", ref: "cleaning-storage" },
//       { id: "5", name: "Kitchen & Dining", ref:"kitchen-dining" },
//       { id: "6", name: "Craft & Hobbies" , ref:"craft-hobbies" },
//       { id: "7", name: "Bedroom & Bathroom", ref:"bedroom-bathroom" },
//       { id: "8", name: "Babies , Kids Section", ref:"kids-section" },
//     ],
//   };
