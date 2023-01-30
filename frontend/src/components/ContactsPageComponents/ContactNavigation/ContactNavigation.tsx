import React from "react";
import {
  ContactNavigationStyled,
  ContactStyledLink,
} from "./ContactNavigation.styled";
import Links from "constants/links/Links";
import { useLocation } from "react-router-dom";

const ContactNavigation = () => {
  const { pathname } = useLocation();
  return (
    <ContactNavigationStyled>
      <ContactStyledLink
        to={Links.contacts}
        active={!pathname.includes("faq") && !pathname.includes("stores")}
      >
        Contact Us
      </ContactStyledLink>
      <ContactStyledLink
        to={Links.contactStores}
        active={pathname.includes("stores")}
      >
        Stores
      </ContactStyledLink>
      <ContactStyledLink
        to={Links.contactsFAQ}
        active={pathname.includes("faq")}
      >
        FAQ
      </ContactStyledLink>
    </ContactNavigationStyled>
  );
};

export default ContactNavigation;
