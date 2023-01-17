import React from "react";

import {
  AttributesStyled,
  AttributesStyledList,
  AttributesStyledListItem,
} from "./ProductAttributes.styled";

import { ProductAttribbute } from "components/Product/types/Product.types";

const ProductAttributes: React.FC<{ attributes: ProductAttribbute[] }> = ({
  attributes,
}) => {
  console.log(attributes);
  return <></>;
  // return (
  //   <AttributesStyled>
  //     {attributes.map((attribute: ProductAttribbute) => {
  //       console.log(attribute);
  //       return (
  //         <AttributesStyledList key={attribute.id}>
  //           {attribute.values.map((item) => {
  //             console.log(attribute);
  //             if (attribute.type === "color") {
  //               return (
  //                 <AttributesStyledListItem
  //                   key={
  //                     attribute.attribute +
  //                     item.value +
  //                     Math.random().toString()
  //                   }
  //                   active={item.value === attribute.selectedValue}
  //                   type={attribute.type}
  //                   bgColor={item.value}
  //                 >
  //                   <span></span>
  //                 </AttributesStyledListItem>
  //               );
  //             } else if (attribute.attribute.attribute === "text") {
  //               return (
  //                 <AttributesStyledListItem
  //                   key={
  //                     attribute.attribute +
  //                     values.attribute +
  //                     Math.random().toString()
  //                   }
  //                   active={item.value === attribute.selectedValue}
  //                   type={attribute.type}
  //                 >
  //                   <span>{item.value}</span>
  //                 </AttributesStyledListItem>
  //               );
  //             }

  //             return <></>;
  //           })}
  //         </AttributesStyledList>
  //       );
  //     })}
  //   </AttributesStyled>
  // );
};

export default ProductAttributes;
