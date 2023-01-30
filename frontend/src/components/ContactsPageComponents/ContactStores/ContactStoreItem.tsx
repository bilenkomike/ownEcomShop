import React from "react";
import {
  ContactStyledStoreItem,
  ContactStyledStoreItemContent,
  ContactStyledStoreItemImage,
  ContactStyledStoreItemInfoItem,
  ContactStyledStoreItemTitle,
} from "./ContactStores.styled";

import { BsPhone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { withWorkDuration } from "helpers/workduration/withWorkDuration";

export type Store = {
  address: string;
  city: string;
  country: string;
  email: string;
  id: number;
  image: string;
  phone: string;
  postalcode: string;
  work_from: string;
  work_till: string;
};

const ContactStoreItem: React.FC<Store> = ({
  address,
  city,
  id,
  country,
  email,
  image,
  phone,
  postalcode,
  work_from,
  work_till,
}) => {
  return (
    <ContactStyledStoreItem>
      <ContactStyledStoreItemImage
        src={image}
        alt={country + address + city + postalcode}
      />
      <ContactStyledStoreItemContent>
        <ContactStyledStoreItemTitle>
          {city},{country}
        </ContactStyledStoreItemTitle>
        <ContactStyledStoreItemInfoItem>
          <BsPhone /> {phone}
        </ContactStyledStoreItemInfoItem>
        <ContactStyledStoreItemInfoItem>
          <AiOutlineMail /> {email}
        </ContactStyledStoreItemInfoItem>
        <ContactStyledStoreItemInfoItem>
          <AiOutlineClockCircle /> Daily from {withWorkDuration(work_from)} to{" "}
          {withWorkDuration(work_till)}
        </ContactStyledStoreItemInfoItem>
        <ContactStyledStoreItemInfoItem>
          <GrLocation />
          <a
            href={`https://www.google.com/maps/embed/v1/place
  ?key=YOUR_API_KEY
  &q=Eiffel+Tower,Paris+France`}
            target="_blank"
            rel="noreferrer"
          >
            {address}, {postalcode}
          </a>
        </ContactStyledStoreItemInfoItem>
      </ContactStyledStoreItemContent>
    </ContactStyledStoreItem>
  );
};

export default ContactStoreItem;
