import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CartContent extends Component {

    // componentWillUnmount() {
    //     if(this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }

    handleChecked = (e) => {
        if(e.target.checked){
            this.props.addShipping();
            toast.success('Added inr 60 into total', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else {
            this.props.substractShipping();
            toast.error('Removed inr 60 from total', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    render() {
        return (
            <section className="cart-area ptb-60">
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-table table-responsive">
                                    <CartProduct />
                                </div>

                                <div className="cart-buttons">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-7">
                                            <div className="continue-shopping-box">
                                                <Link href="/">
                                                    <a className="btn btn-primary">Continue Shopping</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-5 text-right">
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                ref="shipping" 
                                                onChange= {this.handleChecked} 
                                            />
                                            <span>Shipping(+60 &#8377; )</span>
                                        </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-totals">
                                    <h3>Cart Totals</h3>

                                    <ul>
                                        <li>Subtotal <span>&#8377; {this.props.total}</span></li>
                                        <li>Shipping <span>&#8377; {this.props.shipping}</span></li>
                                        <li>Total <span><b>&#8377; {this.props.total + this.props.shipping}</b></span></li>
                                    </ul>
                                    <Link href="/checkout">
                                        <a className="btn btn-primary">Proceed to Checkout</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        shipping: state.shipping
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContent)
