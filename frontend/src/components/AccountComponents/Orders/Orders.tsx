import Input from "components/Input/Input";
import React from "react";
import AccountHeader from "../AccountHeader/AccountHeader";
import {
  OrdersStyled,
  OrdersStyledHeaderItem,
  OrdersStyledList,
  OrdersStyledSeeMore,
} from "./Orders.styled";
import OrdersItem from "./OrdersItem";

import { ReactComponent as Convert } from "./images/convert.svg";

const Orders = () => {
  return (
    <OrdersStyled>
      <AccountHeader title="My Orders">
        <OrdersStyledHeaderItem>
          Sort orders
          <Input
            type="select"
            variant="default"
            onChange={(e) => console.log(e)}
            name="sort"
            icon="select"
            placeholder="Sort"
          />
        </OrdersStyledHeaderItem>
      </AccountHeader>
      <OrdersStyledList>
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
      </OrdersStyledList>

      <OrdersStyledSeeMore>
        <Convert />
        Load more
      </OrdersStyledSeeMore>
    </OrdersStyled>
  );
};

export default Orders;
