import { useRouter } from "next/router";
import React from "react";
import { productData } from "../../store/reducers/dataJson/productData";
import Navbar from '../../components/Layout/Navbar';
// import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
// import ProductImage from '../../components/product-details/ProductImage';
// import ProductContent from '../../components/product-details/ProductContent';
// import DetailsTab from '../../components/product-details/DetailsTab';
// import RelatedProducts from '../../components/product-details/RelatedProducts';
// import Facility from '../../components/shop-style-one/Facility';
// import TrendingProducts from "../../components/shop-style-three/TrendingProducts";
import CategoryList from "../../components/shop-style-three/CategoryList";
import Error from "../_error";


function ProductScreen() {
    const router = useRouter();
    const { slug } = router.query;
    var flag = false;
    const product = productData.products.filter((a) => {
      if (a.link == slug) {
        flag = true;
        return productData.products;
      }
    });
    if (!flag) {
      return (
          <Error/>
      );
    }
  
  
    return( <div>
    <React.Fragment>
                  <Navbar />
  
                  {console.log(product)}
                  <CategoryList product={product} />
  
                  <Footer />
              </React.Fragment>
    </div>);
  }
  
  export default ProductScreen;