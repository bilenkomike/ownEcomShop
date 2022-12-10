import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Container from "components/Container/Container";
import CompleteLook from "components/ProductPageComponents/CompleteLook/CompleteLook";
import Interesting from "components/ProductPageComponents/Interesting/Interesting";
import ProductDetails from "components/ProductPageComponents/ProductDetails/ProductDetails";
import ProductPageDescription from "components/ProductPageComponents/ProductPageDescription/ProductPageDescription";
import ProductPageGallary from "components/ProductPageComponents/ProductPageGallary/ProductPageGallary";
import ProductPageHeader from "components/ProductPageComponents/ProductPageHeader/ProductPageHeader";
import ProductReviews from "components/ProductPageComponents/ProductReviews/ProductReviews";
import RecentlyViewed from "components/ProductPageComponents/RecentlyViewed/RecentlyViewed";
import Links from "constants/links/Links";

const ProductPage: React.FC<{
  review: boolean;
  onOpenReview: () => void;
}> = ({ review, onOpenReview }) => {
  const [active, setActive] = useState([true, false, false]);
  const params = useParams();
  let passparams = [];
  for (let i = 0; i < Object.keys(params).length; i++) {
    passparams[i] = {
      key: Object.keys(params)[i],
      value: params[Object.keys(params)[i]],
    };
  }

  const changeContent = (id: number) => {
    const newArray = [];
    for (let i = 0; i < active.length; i++) {
      if (i === id) {
        newArray.push(true);
      } else {
        newArray.push(false);
      }
    }
    setActive(newArray);
  };

  return (
    <article>
      <BreadCrumbs params={passparams} />
      <Container>
        <ProductPageHeader changeBody={changeContent} active={active} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* {active[0] && (
            
          )} */}
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <ProductPageGallary />
                  <ProductPageDescription />
                </>
              }
            />
            <Route path={"details"} element={<ProductDetails />} />
            <Route
              path={"reviews"}
              element={
                <ProductReviews review={review} onOpenReview={onOpenReview} />
              }
            />
          </Routes>

          {/* {active[1] && <ProductDetails />} */}
        </div>
      </Container>

      <CompleteLook />
      <Interesting />
      <RecentlyViewed />
    </article>
  );
};

export default ProductPage;
