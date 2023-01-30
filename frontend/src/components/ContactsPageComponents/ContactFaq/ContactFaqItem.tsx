import React, { useState } from "react";
import {
  ContactStyledFaqAnswer,
  ContactStyledFaqItem,
  ContactStyledFaqItemHeader,
  ContactStyledFaqOpenIcon,
  ContactStyledFaqQuestion,
} from "./ContactFaq.styled";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ContactFaqItem: React.FC<{
  answer: string;
  question: string;
  id: number;
}> = ({ answer, question, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <ContactStyledFaqItem>
      <ContactStyledFaqItemHeader onClick={() => setOpen(!open)}>
        <ContactStyledFaqQuestion>{question}</ContactStyledFaqQuestion>
        <ContactStyledFaqOpenIcon
          active={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open && <AiOutlinePlus />}
          {open && <AiOutlineMinus />}
        </ContactStyledFaqOpenIcon>
      </ContactStyledFaqItemHeader>
      <ContactStyledFaqAnswer active={open}>{answer}</ContactStyledFaqAnswer>
    </ContactStyledFaqItem>
  );
};

export default ContactFaqItem;
