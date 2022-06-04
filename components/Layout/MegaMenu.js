import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Cart from "../Modal/Cart";
// import { useRouter } from "next/router";
// import router from "next/router";

class MegaMenu extends Component {
  state = {
    display: false,
    searchForm: false,
    collapsed: true,
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  listItems = data.categories.map((data, id) => (
    <li key={id}>
      <Link href={`/home-accessories/${data.ref}`}>
        <a>{data.name}</a>
      </Link>
    </li>
  ));

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    let { products } = this.props;
    return (
      <React.Fragment>
        <div className="navbar-area">
          <div id="navbar" className="comero-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src={require("../../images/logo.png")} alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          Shop <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">
                                  Home Accessories
                                </h6>

                                <ul className="megamenu-submenu">
                                  {this.listItems}
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">
                                  Jewelry and Watches
                                </h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href={`/Jewelry-Watches/birthstone`}>
                                      <a>Birthstone Jewelry</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href={`/Jewelry-Watches/children`}>
                                      <a>Children's Jewelry</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/Jewelry-Watches/jewelry-boxes`}
                                    >
                                      <a>Jewelry Boxes</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/Jewelry-Watches/personalized-jewelry`}
                                    >
                                      <a>Personalized Jewelry</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/Jewelry-Watches/wedding-rings`}
                                    >
                                      <a>Wedding Rings</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/Jewelry-Watches/kids-watches`}
                                    >
                                      <a>Kid's Watches</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/Jewelry-Watches/mens-watches`}
                                    >
                                      <a>Men's Watches</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/Jewelry-Watches/women-watches`}
                                    >
                                      <a>Women's Watches</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href={`/Jewelry-Watches/necklaces`}>
                                      <a>Necklaces</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Kids and Baby</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/">
                                      <a>Kids Beds</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Kids Comferts sets</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Kids Rugs & dcor</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Kids Storage</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a> Bean Bags</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Nursery Furniture</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Storage & Organization</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Gliders & Ottomans</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      <a>Gliders & Ottomans</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      <a>Gliders & Ottomans</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a>Shop all baby & Nursery</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Other Pages</h6>

                                <ul className="megamenu-submenu ">
                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">
                                        Mobile, Laptop and Accessories
                                      </a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">
                                        Clothing and Fashion
                                      </a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">Equipments</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">Stationary</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">Healthcare</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">
                                        Sports and Toys
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      <a className="extra-links">
                                        and Many More ...
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                             
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          Women's <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">Clothing - links not active yet</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Coats</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Jackets</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Blazers</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Dresses</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Trousers</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>Jeans</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Sweatshirts</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>T-Shirts</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Shoes - links not active</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Trainers</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Boots</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Heels</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Flats</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>Heeled Sandals</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Platforms</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Accessories</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Bags</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Glasses</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>Jewellery</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>iPhone Cases</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Gadgets</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Hats & Beanie</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Purses</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          Men's <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">Clothing - not active links</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Coats</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Jackets</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Jeans</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>T-Shirts</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Sweatshirts</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Knitwear</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Shirts</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Shoes- links not active </h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Trainers</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Boots</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Heels</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Flats</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Heeled Sandals</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>Sandals</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Platforms</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Heeled Sandals</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Accessories</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Bags</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Backpacks</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Glasses</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Earrings</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>iPhone Cases</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Mobile Accessories</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Socks</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                             
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          Today's Deals <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">Clothing - Link not activated yet </h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Coats</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Jackets</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Jeans</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>T-Shirts</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Sweatshirts</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Knitwear</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Shirts</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Shoes links not active </h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Trainers</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>Boots</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Heels</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Flats</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Heeled Sandals</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar-with-block">
                                      <a>Sandals</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar-with-block">
                                      <a>Platforms</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Heeled Sandals</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Accessories</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link href="/category-without-sidebar">
                                      <a>Bags</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Backpacks</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Glasses</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-left-sidebar">
                                      <a>Earrings</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-sidebar-fullwidth">
                                      <a>iPhone Cases</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-right-sidebar">
                                      <a>Mobile Accessories</a>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/category-without-sidebar-fullwidth">
                                      <a>Socks</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                             
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                  

                    <li className="nav-item p-relative">
                      <Link href="#">
                        <a className="nav-link">Sell Here</a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="">
                            <a className="nav-link">Register as a New Seller</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="">
                            <a className="nav-link">Need Help</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="others-option">
                    <div className="option-item">
                      <i
                        onClick={this.handleSearchForm}
                        className="search-btn fas fa-search"
                        style={{
                          display: this.state.searchForm ? "none" : "block",
                        }}
                      ></i>

                      <i
                        onClick={this.handleSearchForm}
                        className={`close-btn fas fa-times ${
                          this.state.searchForm ? "active" : ""
                        }`}
                      ></i>

                      <div
                        className="search-overlay search-popup"
                        style={{
                          display: this.state.searchForm ? "block" : "none",
                        }}
                      >
                        <div className="search-box">
                          <form className="search-form">
                            <input
                              className="search-input"
                              name="search"
                              placeholder="not working"
                              type="text"
                            />

                            <button className="search-button" type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="option-item">
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </div>

                    <div className="option-item">
                      <Link href="/signup">
                        <a>Sign Up</a>
                      </Link>
                    </div>

                    <div className="option-item">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleCart();
                          }}
                        >
                          Cart({products.length}){" "}
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {this.state.display ? <Cart onClick={this.handleCart} /> : ""}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default connect(mapStateToProps)(MegaMenu);

const data = {
  categories: [
    { id: "1", name: "Furniture & Home Decor", ref: "furniture-home" },
    { id: "2", name: "Pet Supplies", ref: "pet-supplies" },
    { id: "3", name: "Garden & Outdoor", ref: "garden-outdoor" },
    { id: "4", name: "Cleaning & Storage", ref: "cleaning-storage" },
    { id: "5", name: "Kitchen & Dining", ref: "kitchen-dining" },
    { id: "6", name: "Craft & Hobbies", ref: "craft-hobbies" },
    { id: "7", name: "Bedroom & Bathroom", ref: "bedroom-bathroom" },
    { id: "8", name: "Babies , Kids Section", ref: "kids-section" },
  ],
};
