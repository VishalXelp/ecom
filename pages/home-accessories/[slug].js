import { useRouter } from "next/router";
import React from "react";
import { productData } from "../../store/reducers/dataJson/productData";
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';

import CategoryList from "../../components/shop-style-three/CategoryList";



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
    return <div>product not found</div>;
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
