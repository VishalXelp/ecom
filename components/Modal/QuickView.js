import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class QuickView extends Component {

    state = {
        qty: parseInt(this.props.minItem),
        max: 10,
        min: 1
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(this.props.id, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        setTimeout(() => {this.props.closeModal()},5000); 
    }

    IncrementItem = () => {
        this.setState((prevState) => {
          return {
            qty: prevState.qty + 1,
          };
        });
      };
    
      DecreaseItem = () => {
        this.setState((prevState) => {
          if (prevState.qty > parseInt(this.props.minItem)) {
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

    render() {
        const { closeModal } = this.props;
        console.log(this.props);    
        return (
            <div className="modal fade productQuickView show" style={{paddingRight: '16px', display: 'block'}}>
                <ToastContainer />
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="productQuickView-image">
                                    <img src={this.props.image} alt="image" /> 
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="product-content">
                                    <h3><a href="#">{this.props.title}</a></h3>

                                    <div className="price">
                                        <span className="new-price">&#8377;  {this.props.discountPrice}</span>
                                    </div>

                           
                                    <ul className="product-info">
                                        <li><span>Vendor:</span> <a href="#">Lereve</a></li>
                                        <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
                                        <li><span>Product Type:</span> <a href="#">T-Shirt</a></li>
                                    </ul>

                                    <div className="product-color-switch">
                                        <h4>Color:</h4>

                                        <ul>
                                            <li><a href="#" title="Black" className="color-black"></a></li>
                                            <li><a href="#" title="White" className="color-white"></a></li>
                                            <li className="active"><a href="#" title="Green" className="color-green"></a></li>
                                            <li><a href="#" title="Yellow Green" className="color-yellowgreen"></a></li>
                                            <li><a href="#" title="Teal" className="color-teal"></a></li>
                                        </ul>
                                    </div>

                                    <div className="product-size-wrapper">
                                        <h4>Size:</h4>

                                        <ul>
                                            <li><a href="#">XS</a></li>
                                            <li className="active"><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">XL</a></li>
                                            <li><a href="#">XXL</a></li>
                                        </ul>
                                    </div>

                                    <div className="product-add-to-cart">
                                        <div className="input-counter">
                                            <span 
                                                className="minus-btn"
                                                onClick={this.DecreaseItem}
                                            >
                                                <i className="fas fa-minus"></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                value={this.state.qty}
                                                min={this.state.min}
                                                max={this.state.max} 
                                                onChange={e => this.setState({ qty: e.target.value })}
                                            />
                                            <span 
                                                className="plus-btn"
                                                onClick={this.IncrementItem}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </span>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            onClick={this.handleAddToCartFromView}
                                        >
                                            <i className="fas fa-cart-plus"></i> Add to Cart
                                        </button>
                                    </div>

                                    {/* <a href="#" className="view-full-info">View full info</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(QuickView)
