import Button from "UI/Button/Button";
import Input from "components/Input/Input";
import React from "react";
import { PromoStyled } from "./Promo.styled";

const Promo = () => {
  return (
    <PromoStyled>
      <Input
        type="text"
        variant="large"
        name="promo"
        onChange={(e) => console.log(e)}
        placeholder="Enter promo code"
        label="Appy a promo code"
      />
      <Button type="button" styleType="default" variant="solid" size="large">
        Apply
      </Button>
    </PromoStyled>
  );
};

export default Promo;
