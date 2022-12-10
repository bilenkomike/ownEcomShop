import React, { useState } from "react";
import {
  ProductPageDescriptionStyled,
  ProductPageDescriptionStyledAccordion,
  ProductPageDescriptionStyledActions,
  ProductPageDescriptionStyledAttribute,
  ProductPageDescriptionStyledAttributes,
  ProductPageDescriptionStyledHeader,
  ProductPageDescriptionStyledPrice,
  ProductPageDescriptionStyledPriceSaleFrom,
  ProductPageDescriptionStyledPriceText,
  ProductPageDescriptionStyledSale,
  ProductPageDescriptionStyledSizeButton,
  ProductPageDescriptionStyledAccordionHeader,
  ProductPageDescriptionStyledAccordionContent,
  ProductPageDescriptionStyledShare,
  ProductPageDescriptionStyledpayButtons,
} from "./ProductPageDescription.styled";

import Input from "components/Input/Input";
import Rating from "components/Rating/Rating";
import ProductAttributes from "components/ProductAttributes/ProductAttributes";
import { TbHanger } from "react-icons/tb";
import Button from "components/Button/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import PaymentButton from "components/PaymentButton/PaymentButton";

const ProductPageDescription: React.FC<{
  sale: number;
  openSizeChart: () => void;
}> = ({ sale = 50, openSizeChart }) => {
  const [openedDelivery, setOpenedDelivery] = useState(false);
  const [openedReturn, setOpenedReturn] = useState(false);
  const [qty, setQty] = useState(1);
  const currency = "$";
  const price = 30.0;
  return (
    <ProductPageDescriptionStyled>
      <ProductPageDescriptionStyledHeader>
        <span>
          <ProductPageDescriptionStyledPrice>
            <ProductPageDescriptionStyledPriceText sale={sale > 0}>
              {sale === 0 && `${currency} ${price}`}
              {sale > 0 &&
                `${currency} ${(price - (price * sale) / 100).toFixed(2)}`}
            </ProductPageDescriptionStyledPriceText>

            {sale > 0 && (
              <ProductPageDescriptionStyledPriceSaleFrom>
                {currency}
                {price.toFixed(2)}
              </ProductPageDescriptionStyledPriceSaleFrom>
            )}
          </ProductPageDescriptionStyledPrice>
          <ProductPageDescriptionStyledSale>
            {sale}%
          </ProductPageDescriptionStyledSale>
        </span>
        <div>
          <Rating rating={4} absolute={false} />
          12 reviews
        </div>
      </ProductPageDescriptionStyledHeader>
      <ProductPageDescriptionStyledAttributes>
        <ProductPageDescriptionStyledAttribute>
          Color
          <span>
            <ProductAttributes
              attributes={[
                {
                  id: "color",
                  type: "color",
                  items: [
                    { name: "#C0DDED", value: "#C0DDED" },
                    { name: "#874E19", value: "#874E19" },
                    { name: "#000000", value: "#000000" },
                  ],
                  selectedValue: "#874E19",
                },
              ]}
            />
            Brown
          </span>
        </ProductPageDescriptionStyledAttribute>
        <ProductPageDescriptionStyledAttribute>
          Size
          <span>
            <Input
              name="size-select"
              variant="default"
              type="select"
              options={[
                { label: "S", value: "S" },
                { label: "XS", value: "XS" },
                { label: "XL", value: "XL" },
                { label: "M", value: "M" },
              ]}
              onChange={(e) => console.log(e)}
              icon="select"
              placeholder="Please select"
            />
            <ProductPageDescriptionStyledSizeButton onClick={openSizeChart}>
              <TbHanger /> Size Chart
            </ProductPageDescriptionStyledSizeButton>
          </span>
        </ProductPageDescriptionStyledAttribute>
      </ProductPageDescriptionStyledAttributes>
      <ProductPageDescriptionStyledActions>
        <Input
          name="product-qty"
          type="number"
          variant="default"
          max={10}
          min={1}
          step={1}
          value={qty}
          onChange={(e) => setQty(Number(e))}
        />
        <Button
          icon="cart"
          iconPosition="before"
          styleType="default"
          variant="solid"
          size="default"
          removeFullWidth={true}
        >
          Add to cart
        </Button>
        <Button
          icon="heart"
          iconPosition="before"
          styleType="default"
          variant="outlined"
          size="default"
        >
          Favourite
        </Button>
      </ProductPageDescriptionStyledActions>
      <ProductPageDescriptionStyledAccordion>
        <ProductPageDescriptionStyledAccordionHeader
          active={openedDelivery}
          onClick={() => setOpenedDelivery(!openedDelivery)}
        >
          <h5>Delivery</h5>
          <button>
            {!openedDelivery && <AiOutlinePlus />}
            {openedDelivery && <AiOutlineMinus />}
          </button>
        </ProductPageDescriptionStyledAccordionHeader>
        <ProductPageDescriptionStyledAccordionContent active={openedDelivery}>
          <p>
            Free standard shipping on orders over <strong>$35</strong> before
            tax, plus free returns.
          </p>
          <table>
            <thead>
              <tr>
                <td>Type</td>
                <td>How Long</td>
                <td>How much</td>
              </tr>
              <span></span>
            </thead>

            <tbody>
              <tr>
                <td>Standard delivery</td>
                <td>1-4 business days</td>
                <td>$4.50</td>
              </tr>
              <span></span>
              <tr>
                <td>Express delivery</td>
                <td>1 business day</td>
                <td>$10.00</td>
              </tr>
              <span></span>
              <tr>
                <td>Pick up in store</td>
                <td>1-3 business days</td>
                <td>Free</td>
              </tr>
            </tbody>
          </table>
        </ProductPageDescriptionStyledAccordionContent>
      </ProductPageDescriptionStyledAccordion>
      <ProductPageDescriptionStyledAccordion>
        <ProductPageDescriptionStyledAccordionHeader
          active={openedReturn}
          onClick={() => setOpenedReturn(!openedReturn)}
        >
          <h5>Return</h5>
          <button>
            {!openedReturn && <AiOutlinePlus />}
            {openedReturn && <AiOutlineMinus />}
          </button>
        </ProductPageDescriptionStyledAccordionHeader>
        <ProductPageDescriptionStyledAccordionContent
          active={openedReturn}
          minh
        >
          <p>
            You have <strong>60 days </strong> to return the item(s) using any
            of the following methods:
          </p>
          <ul>
            <li>Free store return</li>
            <li>Free returns via USPS Dropoff Service</li>
          </ul>
        </ProductPageDescriptionStyledAccordionContent>
      </ProductPageDescriptionStyledAccordion>
      <ProductPageDescriptionStyledShare>
        Share:
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaPinterestP />
        </button>
      </ProductPageDescriptionStyledShare>
      <ProductPageDescriptionStyledpayButtons>
        <PaymentButton type="visa" />
        <PaymentButton type="mastercard" />
        <PaymentButton type="paypal" />
      </ProductPageDescriptionStyledpayButtons>
    </ProductPageDescriptionStyled>
  );
};

export default ProductPageDescription;
