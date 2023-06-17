import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Container from "components/Container/Container";
import ProductsList from "components/ProductsList/ProductsList";
import ProductsListPageTopBar from "components/ProductsListPageTopBar/ProductsListPageTopBar";
import ProductListBottom from "components/ProductPageComponents/ProductListBottom/ProductListBottom";

import axios from "axios";
import API_URL from "config";
import ProductInterface, {
  ProductCartInterface,
} from "components/Product/types/Product.types";

const ProductsPage: React.FC = () => {
  const [data, setData] =
    useState<{
      count: number;
      next: string | null;
      page_number: number;
      pages: number;
      previous: string | null;
      results: ProductCartInterface[];
    } | null>(null);

  const params = useParams();
  let passparams = [];
  for (let i = 0; i < Object.keys(params).length; i++) {
    passparams[i] = {
      key: Object.keys(params)[i],
      value: params[Object.keys(params)[i]],
    };
  }

  const { type, category } = params;

  useEffect(() => {
    axios
      .get(API_URL + `products/?type=${type}&category=${category}&perPage=8`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [type, category]);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <section>
      <BreadCrumbs params={passparams} />
      <Container>
        {data != null ? (
          <>
            <ProductsListPageTopBar
              showFilter={showFilter}
              handleshowFilter={() => setShowFilter(!showFilter)}
            />
            <ProductsList showFilter={showFilter} products={data.results} />
            <ProductListBottom />
          </>
        ) : (
          <></>
        )}
      </Container>
    </section>
  );
};

export default ProductsPage;
