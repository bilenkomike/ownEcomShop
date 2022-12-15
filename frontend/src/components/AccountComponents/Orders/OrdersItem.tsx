import React, { useRef, useState } from "react";
import {
  OrderItemsStyledListItemInfo,
  OrderItemsStyledListTotal,
  OrdersItemsStyledList,
  OrdersItemsStyledListItem,
  OrdersItemsStyledListItemMainText,
  OrdersStyledListItem,
  OrdersStyledListItemHeader,
  OrdersStyledListItemHeaderButton,
  OrdersStyledListItemHeaderId,
  OrdersStyledListItemHeaderStatus,
  OrdersStyledSeeTracking,
} from "./Orders.styled";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import img from "./images/image.png";
import Button from "components/Button/Button";

const OrdersItem = () => {
  const [open, setOpen] = useState(false);
  const list = useRef<HTMLUListElement>(null);
  console.log(list.current?.clientHeight);
  return (
    <OrdersStyledListItem>
      <OrdersStyledListItemHeader>
        <OrdersStyledListItemHeaderId active={open}>
          # 34BV66580K92
        </OrdersStyledListItemHeaderId>
        <time dateTime="2001-05-15T19:00">
          <BiTimeFive />
          September 9, 2020
        </time>
        <OrdersStyledListItemHeaderStatus status="canceled">
          In Progress
        </OrdersStyledListItemHeaderStatus>
        <span>$750.00</span>
        <OrdersStyledListItemHeaderButton
          active={open}
          onClick={() => setOpen(!open)}
        >
          {!open && <AiOutlinePlus />}
          {open && <AiOutlineMinus />}
        </OrdersStyledListItemHeaderButton>
      </OrdersStyledListItemHeader>
      <OrdersItemsStyledList ref={list} height={3} active={open}>
        <OrdersItemsStyledListItem>
          <img src={img} alt="" />
          <OrdersItemsStyledListItemMainText>
            Basic hooded sweatshirt in pink
            <span>
              Color:<span>pink</span>
            </span>
            <span>
              Size:<span>S</span>
            </span>
          </OrdersItemsStyledListItemMainText>
          <OrderItemsStyledListItemInfo>
            Price:
            <span>$15.50</span>
          </OrderItemsStyledListItemInfo>
          <OrderItemsStyledListItemInfo>
            Quantity:
            <span>1</span>
          </OrderItemsStyledListItemInfo>

          <OrderItemsStyledListItemInfo>
            Subtotal:
            <span>
              <strong>$18.90</strong>
            </span>
          </OrderItemsStyledListItemInfo>
        </OrdersItemsStyledListItem>
        <OrdersItemsStyledListItem>
          <img src={img} alt="" />
          <OrdersItemsStyledListItemMainText>
            Basic hooded sweatshirt in pink
            <span>
              Color:<span>pink</span>
            </span>
            <span>
              Size:<span>S</span>
            </span>
          </OrdersItemsStyledListItemMainText>
          <OrderItemsStyledListItemInfo>
            Price:
            <span>$15.50</span>
          </OrderItemsStyledListItemInfo>
          <OrderItemsStyledListItemInfo>
            Quantity:
            <span>1</span>
          </OrderItemsStyledListItemInfo>

          <OrderItemsStyledListItemInfo>
            Subtotal:
            <span>
              <strong>$18.90</strong>
            </span>
          </OrderItemsStyledListItemInfo>
        </OrdersItemsStyledListItem>
        <OrdersItemsStyledListItem>
          <img src={img} alt="" />
          <OrdersItemsStyledListItemMainText>
            Basic hooded sweatshirt in pink
            <span>
              Color:<span>pink</span>
            </span>
            <span>
              Size:<span>S</span>
            </span>
          </OrdersItemsStyledListItemMainText>
          <OrderItemsStyledListItemInfo>
            Price:
            <span>$15.50</span>
          </OrderItemsStyledListItemInfo>
          <OrderItemsStyledListItemInfo>
            Quantity:
            <span>1</span>
          </OrderItemsStyledListItemInfo>

          <OrderItemsStyledListItemInfo>
            Subtotal:
            <span>
              <strong>$18.90</strong>
            </span>
          </OrderItemsStyledListItemInfo>
        </OrdersItemsStyledListItem>
        <OrderItemsStyledListTotal>
          <span>
            Subtotal: <span>$198.65</span>
          </span>
          <span>
            Shipping: <span>$25.00</span>
          </span>
          <span>
            Tax: <span>$6.35</span>
          </span>
          <span>
            Total: <span>$230.00</span>
          </span>
        </OrderItemsStyledListTotal>
      </OrdersItemsStyledList>
      <OrdersStyledSeeTracking active={open}>
        You can track your order here
        <Button
          size="small"
          type="button"
          styleType="default"
          variant="outlined"
        >
          Order tracking
        </Button>
      </OrdersStyledSeeTracking>
    </OrdersStyledListItem>
  );
};

export default OrdersItem;
