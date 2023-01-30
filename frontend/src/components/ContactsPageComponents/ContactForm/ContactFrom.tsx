import React, { useState } from "react";
import {
  ContactStyledForm,
  ContactStyledFormGroup,
  ContactStyledHeader,
} from "./ContactFrom.styled";

import axios from "axios";
import CompanyContactInformation from "./CompanyContactInformation/CompanyContactInformation";
import Input from "components/Input/Input";
import TextArea from "components/TextArea/TextArea";
import Alert from "components/Alert/Alert";
import Button from "components/Button/Button";
import API_URL from "config";

const ContactFrom = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, phone, fullname, subject);
    axios
      .post(API_URL + "contacts/create/", {
        email,
        phone,
        fullname,
        subject,
        message,
      })
      .then((response) => {
        if (response.status === 201) {
          setFullname("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });
  };

  return (
    <ContactStyledForm onSubmit={handleSubmit}>
      <CompanyContactInformation />

      {success && (
        <Alert variant="success">
          Your question was succesfully saved and delivered to our admins! The
          will contact you as soon as possible.
        </Alert>
      )}
      <ContactStyledHeader>
        Or get in touch with us by completing the below form:
      </ContactStyledHeader>

      <ContactStyledFormGroup>
        <Input
          onChange={(e) => setFullname(e)}
          value={fullname}
          name="contact-name"
          type="text"
          variant="large"
          label="Full Name *"
          placeholder="Your full name"
        />
        <Input
          onChange={(e) => setEmail(e)}
          value={email}
          name="contact-email"
          type="text"
          variant="large"
          label="Email *"
          placeholder="Your email"
        />
        <Input
          onChange={(e) => setPhone(e)}
          value={phone}
          name="contact-phone"
          type="text"
          variant="large"
          label="Your Phone *"
          placeholder="Your Phone"
        />
        <Input
          onChange={(e) => setSubject(e)}
          value={subject}
          name="contact-subject"
          type="text"
          variant="large"
          label="Subject *"
          placeholder="Enter subject"
        />
        <TextArea
          label="Message *"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e)}
        />
      </ContactStyledFormGroup>
      <Button variant="solid" styleType="default" size="large" type="submit">
        Send message
      </Button>
    </ContactStyledForm>
  );
};

export default ContactFrom;
