import React, { useState } from "react";
import Button from "UI/Button/Button";
import CheckBox from "components/CheckBox/CheckBox";
import Input from "components/Input/Input";
import {
  RegisterStyled,
  RegisterStyledForm,
  RegisterStyledTitle,
  RegisterStyledSubTitle,
  RegisterStyledLink,
  RegisterStyledAddition,
  RegisterStyledSocials,
  RegisterStyledCloseButton,
} from "./Register.styled";

import { TfiClose } from "react-icons/tfi";

const Register: React.FC<{ toggleRegister: () => void }> = ({
  toggleRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RegisterStyled onClick={toggleRegister}>
      <RegisterStyledForm onClick={(e) => e.stopPropagation()}>
        <RegisterStyledCloseButton
          type="button"
          id="close-register"
          onClick={(e) => {
            e.preventDefault();
            toggleRegister();
          }}
        >
          <TfiClose />
        </RegisterStyledCloseButton>
        <RegisterStyledTitle>Sign up</RegisterStyledTitle>
        <RegisterStyledSubTitle>
          Registration takes less than a minute but gives you full control over
          your orders.
        </RegisterStyledSubTitle>
        <Input
          name="register-full-name"
          label="Full name"
          type="text"
          variant="default"
          onChange={setEmail}
          value={email}
          placeholder="Your full name"
        />
        <Input
          name="register-email"
          label="Email"
          type="email"
          variant="default"
          onChange={setEmail}
          value={email}
          placeholder="Your working email"
        />

        <Input
          name="register-password"
          label="Password"
          type="password"
          variant="default"
          onChange={setPassword}
          value={password}
          placeholder="Your working password"
        />
        <Input
          name="register-confrim-password"
          label="Confirm Password"
          type="password"
          variant="default"
          onChange={setPassword}
          value={password}
          placeholder="Your working password again"
        />

        <CheckBox text="Remember me" />

        <Button
          variant="solid"
          styleType="default"
          type="submit"
          size="default"
        >
          Sign up
        </Button>
        <div>
          Have an account?{" "}
          <RegisterStyledLink to="/"> Sign in </RegisterStyledLink>
        </div>

        <RegisterStyledAddition>
          Or sign in with
          <RegisterStyledSocials>
            <Button
              size="social"
              styleType="default"
              variant="solid"
              icon="facebook"
              iconPosition="before"
            />
            <Button
              size="social"
              styleType="default"
              variant="solid"
              icon="google"
              iconPosition="before"
            />
            <Button
              size="social"
              styleType="default"
              variant="solid"
              icon="twitter"
              iconPosition="before"
            />
            <Button
              size="social"
              styleType="default"
              variant="solid"
              icon="linkedin"
              iconPosition="before"
            />
          </RegisterStyledSocials>
        </RegisterStyledAddition>
      </RegisterStyledForm>
    </RegisterStyled>
  );
};

export default Register;
