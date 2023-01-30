import ContactNavigation from "components/ContactsPageComponents/ContactNavigation/ContactNavigation";
import Container from "components/Container/Container";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactFrom from "components/ContactsPageComponents/ContactForm/ContactFrom";
import ContactStores from "components/ContactsPageComponents/ContactStores/ContactStores";
import ContactFaq from "components/ContactsPageComponents/ContactFaq/ContactFaq";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";

const ContactsPage = () => {
  return (
    <>
      <BreadCrumbs params={[{ value: "Contacts", key: "contacts" }]} />
      <Container>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <ContactNavigation />

          <Routes>
            <Route path={``} element={<ContactFrom />} />
            <Route path={"/faq/"} element={<ContactFaq />} />
            <Route path={"/stores/"} element={<ContactStores />} />
          </Routes>
        </span>
      </Container>
    </>
  );
};

export default ContactsPage;
