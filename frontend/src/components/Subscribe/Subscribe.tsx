import React, { useEffect, useState } from "react";
import Button from "UI/Button/Button";
import Input from "components/Input/Input";

import {
  SubscribeStyled,
  SubscribeStyledImg,
  SubscribeStyledContent,
  SubscribeStyledContentSubTitle,
  SubscribeStyledContentSelectType,
  SubscribeStyledContentSelectTypeItem,
  SubscribeStyledSubscribeForm,
} from "./Subscribe.styled";
import img from "./images/image.png";
import CheckBox from "components/CheckBox/CheckBox";
import Title from "UI/Title/Title";
import { useLocation } from "react-router-dom";

import axios from "axios";
import API_URL from "config";

const Subscribe: React.FC = (props) => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [types, setTypes] = useState([]);
  const [selectedType, setSeelectedType] = useState("");
  const [quite, setQuite] = useState(false);

  useEffect(() => {
    axios.get(API_URL + "products/types/").then((response) => {
      setTypes(response.data);
      setSeelectedType(response.data[0].name);
    });
  }, []);

  const locationIncludes =
    location.pathname.includes("checkout") ||
    location.pathname.includes("account");
  if (locationIncludes) return <section> </section>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter first email before subscribing");
      return;
    }
    axios
      .post(API_URL + "subscription/create/", {
        email: email,
        product_category: selectedType,
        fall_quite: quite,
      })
      .then((response) => {
        if (response.status === 200) {
          setEmail("");
        } else {
          alert(response.data);
        }
      });
  };

  return (
    <SubscribeStyled>
      <SubscribeStyledContent>
        <Title>Subscribe for updates</Title>
        <SubscribeStyledContentSubTitle>
          Subscribe for exclusive early sale access and new arrivals.
        </SubscribeStyledContentSubTitle>
        <SubscribeStyledContentSelectType>
          {types.length > 0 &&
            types.map((type: { name: string; id: number }) => (
              <SubscribeStyledContentSelectTypeItem
                key={`subscription_${type.name}`}
                active={type.name === selectedType}
                onClick={() => {
                  setSeelectedType(type.name);
                }}
              >
                {type.name}
              </SubscribeStyledContentSelectTypeItem>
            ))}
        </SubscribeStyledContentSelectType>
        <SubscribeStyledSubscribeForm onSubmit={handleSubmit}>
          <Input
            name="subscribe-email"
            label="Email"
            variant="default"
            type="email"
            placeholder="Your working email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <Button
            size="default"
            styleType="default"
            variant="solid"
            type="submit"
          >
            Subscribe
          </Button>
        </SubscribeStyledSubscribeForm>

        <CheckBox
          text={"I agree to receive communications from Createx Store."}
          onChange={() => {
            setQuite(!quite);
          }}
        />
      </SubscribeStyledContent>
      <SubscribeStyledImg src={img} />
    </SubscribeStyled>
  );
};

export default Subscribe;
