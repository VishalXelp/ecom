import Link from "next/link";
import React, { useEffect, useState } from "react";

function LoginModal(props) {
  const { closeLoginModal } = props;

  return (
    <div>
      loginModal
      <div
        className="modal fade productShippingModal show"
        style={{ paddingRight: "10px", display: "block"  }}
      >
        <div className="modal-dialog modal-dialog-centered"
        style={{width:"inherit"}}
         role="document">
          <div className="modal-content">
            <button
              type="button"
              onClick={closeLoginModal}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>

            <div className="shipping-content">
              <h3>Please Login to continue </h3>
              {/* <ul>
                <li>
                  Complimentary ground shipping within 1 to 7 business days
                </li>
                <li>
                  In-store collection available within 1 to 7 business days
                </li>
                <li>Next-day and Express delivery options also available</li>
                <li>
                  Purchases are delivered in an orange box tied with a Bolduc
                  ribbon, with the exception of certain items
                </li>
                <li>
                  See the delivery FAQs for details on shipping methods, costs
                  and delivery times
                </li>
              </ul> */}

{/* <br/>

              <button className="btn btn-primary">Click here to Login !!!</button>
              <div style={{marginTop:50}}>
              <button className="btn btn-primary">To Register</button>
</div> */}

      
<section className="login-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> Login</h2>
                                    </div>

                                    <form className="login-form">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your name" id="name" name="name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">Login</button>
{/*                                         
                                        <Link href="#">
                                            <a className="forgot-password">Lost your password?</a>
                                        </Link> */}
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="new-customer-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> New Customer</h2>
                                    </div>

                                    <span>Create a Account</span>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                    <Link href="/signup">
                                        <a className="btn btn-primary">Create A Account</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
