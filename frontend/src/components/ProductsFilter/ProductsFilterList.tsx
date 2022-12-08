import React, { useState } from "react";
import {
  ProductsFilterStyledListItem,
  ProductsFilterStyledHeader,
  ProductsFilterStyledIcon,
  ProductsFilterStyledItem,
  ProductsFilterStyledList,
  ProductsFilterStyledTitle,
  ProductsFilterStyledListInner,
  ProructsFilterStyledRangeInput,
} from "./ProductsFilter.styled";
import Input from "components/Input/Input";
import CheckBox from "components/CheckBox/CheckBox";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductsFilterList = () => {
  const max = 800;
  const min = 0;
  const [opened, setOpened] = useState(false);
  const [filter, setFilter] = useState("");
  const [priceBegin, setPriceBegin] = useState(min);
  const [priceEnd, setPriceEnd] = useState(max - 200);
  return (
    <>
      <ProductsFilterStyledItem>
        <ProductsFilterStyledHeader onClick={() => setOpened(!opened)}>
          <ProductsFilterStyledTitle>Clothes</ProductsFilterStyledTitle>
          <ProductsFilterStyledIcon active={opened}>
            {!opened && <AiOutlinePlus />}
            {opened && <AiOutlineMinus />}
          </ProductsFilterStyledIcon>
        </ProductsFilterStyledHeader>
        <ProductsFilterStyledListInner active={opened} typePrice>
          {/* color */}
          {/* <ProductsFilterStyledList typeColor={true}>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>

            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <span>
                <span></span>
              </span>
              <p>White</p>
            </ProductsFilterStyledListItem>
          </ProductsFilterStyledList> */}
          {/* text */}
          {/* <Input
            name="filter search"
            variant="small"
            type="text"
            icon="search"
            onChange={(text) => setFilter(text)}
            value={filter}
            placeholder="Search the clothes type"
          />
          <ProductsFilterStyledList>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem>
              <CheckBox text="Coats" additionalText="16" />
            </ProductsFilterStyledListItem>
          </ProductsFilterStyledList> */}
          {/* price */}
          <ProductsFilterStyledList typePrice>
            <ProductsFilterStyledListItem
              priceRange
              left={((priceBegin - min) / max) * 100}
              width={((priceEnd - priceBegin) / max) * 100}
            >
              <div>
                <ProructsFilterStyledRangeInput
                  type="range"
                  max={max}
                  min={min}
                  value={priceBegin}
                  step={10}
                  onChange={(e) =>
                    Number(e.target.value) + 100 <= priceEnd &&
                    setPriceBegin(Number(e.target.value))
                  }
                />
                <div>
                  <i>${priceBegin}</i>
                  <div></div>
                  <i>${priceEnd}</i>
                </div>
                <ProructsFilterStyledRangeInput
                  type="range"
                  max={max}
                  min={min}
                  value={priceEnd}
                  step={10}
                  onChange={(e) =>
                    Number(e.target.value) - 100 >= priceBegin &&
                    setPriceEnd(Number(e.target.value))
                  }
                />
              </div>
            </ProductsFilterStyledListItem>
            <ProductsFilterStyledListItem price>
              <Input
                name="price-begin"
                variant="small"
                value={priceBegin}
                onChange={(numb) => setPriceBegin(Number(numb))}
                type="number"
                max={max}
                min={min}
                step={100}
              />
              <AiOutlineMinus />
              <Input
                name="price-begin"
                variant="small"
                value={priceEnd}
                onChange={(numb) => setPriceEnd(Number(numb))}
                type="number"
                max={max}
                min={min}
                step={100}
              />
            </ProductsFilterStyledListItem>
          </ProductsFilterStyledList>
        </ProductsFilterStyledListInner>
      </ProductsFilterStyledItem>
    </>
  );
};

export default ProductsFilterList;
