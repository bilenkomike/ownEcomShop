import Button from "components/Button/Button";
import CheckBox from "components/CheckBox/CheckBox";
import Input from "components/Input/Input";
import Title from "components/Title/Title";
import React from "react";
import { SearchOrderStyled, SearchOrderStyledInfo } from "./SearchOrder.styled";

const SearchOrder = () => {
  return (
    <SearchOrderStyled>
      <Title>Track your order</Title>
      <p>
        This form allows you to search for tracking details from anywhere within
        Createx Tracking Service.
      </p>

      <form action="">
        <Input
          variant="large"
          onChange={(e) => console.log(e)}
          type="text"
          name="order-no"
          label="Order No"
          placeholder="Enter Order Number(# …)"
        />
        <Button type="submit" variant="solid" size="large" styleType="default">
          Search
        </Button>
      </form>

      <SearchOrderStyledInfo>
        <span>
          <span>Order No:</span>
          <span>34BV66580K92</span>
        </span>
        <span>
          <span>Shiped via:</span>
          <span>UPS Ground</span>
        </span>
        <span>
          <span>Shipped on:</span>
          <span>August 29, 2020, 6:00 pm</span>
        </span>
        <span>
          <span>Destination:</span>
          <span>London, United Kingdom</span>
        </span>

        <span>
          <span>Expected date:</span>
          <span>September 4, 2020</span>
        </span>

        <span>
          <span>Status:</span>
          <span>In Transit</span>
        </span>
      </SearchOrderStyledInfo>
      <CheckBox text="Notify me when order is delivered" />
    </SearchOrderStyled>
  );
};

export default SearchOrder;
