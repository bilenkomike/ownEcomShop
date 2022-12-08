import React from "react";

import {
  AttributesStyled,
  AttributesStyledList,
  AttributesStyledListItem,
} from "./ProductAttributes.styled";

import { Attribute } from "components/Product/types/Product.types";

const ProductAttributes: React.FC<{ attributes: Attribute[] }> = ({
  attributes,
}) => {
  console.log(attributes);
  return (
    <AttributesStyled>
      {attributes.map((attribute: Attribute) => {
        return (
          <AttributesStyledList key={attribute.id}>
            {attribute.items.map((item) => {
              if (attribute.type === "color") {
                return (
                  <AttributesStyledListItem
                    key={attribute.id + item.name + Math.random().toString()}
                    active={item.value === attribute.selectedValue}
                    type={attribute.type}
                    bgColor={item.value}
                  >
                    <span></span>
                  </AttributesStyledListItem>
                );
              } else if (attribute.type === "text") {
                return (
                  <AttributesStyledListItem
                    key={attribute.id + item.name + Math.random().toString()}
                    active={item.value === attribute.selectedValue}
                    type={attribute.type}
                  >
                    <span>{item.value}</span>
                  </AttributesStyledListItem>
                );
              }

              return <></>;
            })}
          </AttributesStyledList>
        );
      })}
    </AttributesStyled>
  );
};

export default ProductAttributes;
