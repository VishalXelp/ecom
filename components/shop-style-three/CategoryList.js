import React, { useState , useEffect } from "react";
import { ToastContainer, toast, Slide } from 'react-toastify';
import ReactTooltip from "react-tooltip";
import Link from 'next/link';

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
//   const [modalImage, setModalImage] = useState(true);
//   const [price, setPrice] = useState(0);
//   const [idd, setIdd] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => setDisplay(true), []);

//   handleAddToCart = (id) => {
//     // props.addToCart(id);
//     //comming from redux reducer on based of actions , this is why commented.

//     toast.success("Added to the cart", {
//       position: "bottom-left",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

 const  openModal = () => {
    setModalOpen(true);
  };

 const  closeModal = () => {
    setModalOpen(!modalOpen);
  };

//   handleModalData = (image, price, id) => {
//     setModalImage(image);
//     setIdd(id);
//     setPrice(price);
//   };

  return (
    <section className="trending-products-area pb-60">
      <ReactTooltip />
      <ToastContainer transition={Slide} />
      <div className="container">
        <div className="section-title without-bg">
          <h2>
            {/* <span className="dot"> { data.categories.map(
                ()=>{ if(props.slug == data.categories.ref){
                        return data.categories.name
                } }
            ) } </span>  */}
          </h2>
        </div>

        <div className="row">

        <React.Fragment>
        <ReactTooltip />
        <ToastContainer transition={Slide} />
        {props.product.map((data, idx) => (
          <div className="col-lg-3 col-md-6 products-col-item" key={idx}>
            <div className="single-product-box">
              <div className="product-image">
               

             
                <a href={`/product/${data.id}`}  >
                  <img
                    src={data.image}
                    height="250px"
                    width="262px"
                    alt="image"
                  />
                  <img
                    src={data.imageHover}
                    height="250px"
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
                            data.price,
                            data.id
                          );
                        }}
                      >
                        <i className="far fa-eye"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a data-tip="Add to Wishlist" data-place="left">
                        <i className="far fa-heart"></i>
                      </a>
                    </Link>
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
                  <span href="#">By Fabrico</span>
                </div>

                <h3>
                  <a href="#">
                    {" "}
                    <div className="custom-title">{data.title} </div>{" "}
                  </a>
                </h3>

                <div className="price-holder">
                <div className="price-holder2">                  <div className="new-price"> &#8377; {data.price}</div>
                  <div className="discount-price">&#8377; 320</div>
                  </div>

                  <div className="percent-off">80% off</div>
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
        {/* {modalOpen ? (
          <QuickView
            closeModal={this.closeModal}
            idd={this.state.idd}
            image={this.state.modalImage}
            price={this.state.price}
          />
        ) : (
          ""
        )} */}
      </React.Fragment>


          {/* <ProductsCard /> */}
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