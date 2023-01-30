import React, { useEffect, useState } from "react";
import { ContactStyledStoresList } from "./ContactStores.styled";
import axios from "axios";
import API_URL from "config";
import ContactStoreItem, { Store } from "./ContactStoreItem";

const ContactStores = () => {
  const [stores, setStores] = useState<Store[] | null>(null);
  useEffect(() => {
    axios.get(API_URL + "stores/").then((response) => {
      setStores(response.data);
    });
  }, []);

  return (
    <ContactStyledStoresList>
      {stores !== null &&
        stores.map((store) => <ContactStoreItem {...store} />)}
    </ContactStyledStoresList>
  );
};

export default ContactStores;
