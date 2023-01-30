import React, { useState, useEffect } from "react";
import { ContactStyledFaq } from "./ContactFaq.styled";
import axios from "axios";
import API_URL from "config";
import ContactFaqItem from "./ContactFaqItem";

const ContactFaq = () => {
  const [faqs, setFaqs] = useState<
    | {
        id: number;
        question: string;
        answer: string;
      }[]
    | null
  >(null);
  useEffect(() => {
    axios.get(API_URL + "faq/").then((response) => {
      setFaqs(response.data);
    });
  }, []);
  return (
    <ContactStyledFaq>
      {faqs?.map((faq) => (
        <ContactFaqItem {...faq} key={`faq__${faq.id}`} />
      ))}
    </ContactStyledFaq>
  );
};

export default ContactFaq;
