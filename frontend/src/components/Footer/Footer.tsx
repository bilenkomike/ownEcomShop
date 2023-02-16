import React from "react";
import {
  FooterStyled,
  FooterStyledContent,
  FooterStyledCopyRight,
  FooterStyledList,
  FooterStyledListItem,
  FooterStyledListTitle,
} from "./Footer.styled";
import DownloadAppButtons from "components/DownloadAppButtons/DownloadAppButtons";
import Button from "UI/Button/Button";

import { BsHeart } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterStyledContent>
        <FooterStyledList>
          <FooterStyledListTitle>HELP</FooterStyledListTitle>
          <FooterStyledListItem>Delivery & returns</FooterStyledListItem>
          <FooterStyledListItem>FAQ</FooterStyledListItem>
          <FooterStyledListItem>Track order</FooterStyledListItem>
          <FooterStyledListItem>Contacts</FooterStyledListItem>
          <FooterStyledListItem>Blog</FooterStyledListItem>
        </FooterStyledList>

        <FooterStyledList>
          <FooterStyledListTitle> Shop</FooterStyledListTitle>
          <FooterStyledListItem>New arrivals</FooterStyledListItem>
          <FooterStyledListItem>Trending now</FooterStyledListItem>
          <FooterStyledListItem>Sales</FooterStyledListItem>
          <FooterStyledListItem>Brands</FooterStyledListItem>
        </FooterStyledList>
        <FooterStyledList>
          <FooterStyledListTitle>Get in touch</FooterStyledListTitle>
          <FooterStyledListItem>
            <strong>Call:</strong>(405) 555-0128
          </FooterStyledListItem>
          <FooterStyledListItem>
            <strong>Email:</strong>hello@createx.com
          </FooterStyledListItem>
          <FooterStyledListItem>
            <Button
              iconPosition="before"
              icon="facebook"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="instagram"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="twitter"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="youtube"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="pinterest"
              styleType="light"
              size="social"
              variant="solid"
            />
          </FooterStyledListItem>
        </FooterStyledList>
        <FooterStyledList>
          <FooterStyledListTitle>Download our app</FooterStyledListTitle>
          <DownloadAppButtons />
        </FooterStyledList>
      </FooterStyledContent>
      <FooterStyledContent>
        <FooterStyledCopyRight>
          © All rights reserved. Made with
          <BsHeart /> by Createx Studio
        </FooterStyledCopyRight>{" "}
        Go to top
      </FooterStyledContent>
    </FooterStyled>
  );
};

export default Footer;

// Shop
// Get in touch
// Download our app
// Delivery & returns
// New arrivals
// Call:
// (405) 555-0128
// FAQ
// Trending now
// Email:
// hello@createx.com
// Track order
// Sales
// Contacts
// Brands
// Blog
