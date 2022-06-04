import { useRouter } from "next/router";
import React from "react";
import { productData } from "../../store/reducers/dataJson/productData";
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';


function ProductScreen() {
  const router = useRouter();
  const { id } = router.query;
  var flag = false;
  const product = productData.products.find((a) => {
    if (a.id == id) {
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
                <Breadcrumb title={product.title} />
                

                <section className="products-details-area pt-30">
                    <div className="container">
                        <div className="row">
                            <ProductImage product={product} />
                            <ProductContent product={product} />
                            <DetailsTab />
                        </div>
                    </div>

                    {/* <RelatedProducts /> */}

                    {/* <Facility /> */}
                </section>

                <Footer />
            </React.Fragment>
  </div>);
}

export default ProductScreen;
