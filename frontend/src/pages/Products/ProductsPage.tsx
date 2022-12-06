import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Container from "../../components/Container/Container";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsListPageTopBar from "../../components/ProductsListPageTopBar/ProductsListPageTopBar";
import ProductListBottom from "../../components/ProductsPageComponents/ProductListBottom/ProductListBottom";

const ProductsPage: React.FC = () => {
  const params = useParams();
  let passparams = [];
  for (let i = 0; i < Object.keys(params).length; i++) {
    passparams[i] = {
      key: Object.keys(params)[i],
      value: params[Object.keys(params)[i]],
    };
  }

  const [showFilter, setShowFilter] = useState(false);

  return (
    <section>
      <BreadCrumbs params={passparams} />
      <Container>
        <ProductsListPageTopBar
          showFilter={showFilter}
          handleshowFilter={() => setShowFilter(!showFilter)}
        />
        <ProductsList showFilter={showFilter} />
        <ProductListBottom />
      </Container>
    </section>
  );
};

export default ProductsPage;
