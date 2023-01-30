import React, { useState, useEffect } from "react";
import {
  CompanyContactStyled,
  CompanyContactStyledHeader,
  CompanyContactStyledItem,
} from "./CompanyContactInformation.styled";

import { BsPhone, BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

import axios from "axios";
import API_URL from "config";

const CompanyContactInformation = () => {
  const [contact, setContact] = useState<{
    id: number;
    email: string;
    phone: string;
    whatsapp: string;
    twitter: string;
  } | null>(null);
  useEffect(() => {
    axios.get(API_URL + "company-contacts/1/").then((response) => {
      setContact(response.data);
    });
  }, []);
  return (
    <CompanyContactStyled>
      {contact !== null && (
        <>
          <CompanyContactStyledHeader>
            If you have any questions, concerns or comments, we would love to
            hear from you! Submit your query using any of the methods below:
          </CompanyContactStyledHeader>
          <CompanyContactStyledItem
            href={`tel:${contact.phone}`}
            target="_blank"
          >
            <BsPhone /> {contact.phone}
          </CompanyContactStyledItem>
          <CompanyContactStyledItem
            href={`mailto:${contact.email}`}
            target="_blank"
          >
            <AiOutlineMail /> Send us an email
          </CompanyContactStyledItem>
          <CompanyContactStyledItem
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
          >
            <IoLogoWhatsapp /> Connect on Messenger
          </CompanyContactStyledItem>
          <CompanyContactStyledItem
            href={`https://twitter.com/${contact.twitter}`}
            target="_blank"
          >
            <BsTwitter /> Tweet us
          </CompanyContactStyledItem>
        </>
      )}
    </CompanyContactStyled>
  );
};

export default CompanyContactInformation;
