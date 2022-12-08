import React, { useState } from "react";
import Button from "components/Button/Button";
import CheckBox from "components/CheckBox/CheckBox";
import Input from "components/Input/Input";
import {
  LoginStyled,
  LoginStyledForm,
  LoginStyledTitle,
  LoginStyledSubTitle,
  LoginStyledForgotPassword,
  LoginStyledLink,
  LoginStyledAddition,
  LoginStyledSocials,
  LoginStyledCloseButton,
} from "./Login.styled";

import { TfiClose } from "react-icons/tfi";

const Login: React.FC<{ toggleLogin: () => void }> = ({ toggleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginStyled onClick={toggleLogin}>
      <LoginStyledForm onClick={(e) => e.stopPropagation()}>
        <LoginStyledCloseButton
          id="close-login"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleLogin();
          }}
        >
          <TfiClose />
        </LoginStyledCloseButton>
        <LoginStyledTitle>Sign in</LoginStyledTitle>
        <LoginStyledSubTitle>
          Sign in to your account using email and password provided during
          registration.
        </LoginStyledSubTitle>

        <Input
          name="loginemail"
          label="Email"
          type="email"
          variant="default"
          onChange={setEmail}
          value={email}
          placeholder="Your working email"
        />

        <Input
          name="loginpassword"
          label="Password"
          type="password"
          variant="default"
          onChange={setPassword}
          value={password}
          placeholder="Your working password"
        />
        <LoginStyledForgotPassword>
          <CheckBox text="Keep me signed in" />
          <LoginStyledLink to="/">Forgot password?</LoginStyledLink>
        </LoginStyledForgotPassword>
        <Button
          variant="solid"
          styleType="default"
          type="submit"
          size="default"
        >
          Sign in
        </Button>
        <div>
          Don't have an account?{" "}
          <LoginStyledLink to="/"> Sign up </LoginStyledLink>
        </div>

        <LoginStyledAddition>
          Or sign in with
          <LoginStyledSocials>
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
          </LoginStyledSocials>
        </LoginStyledAddition>
      </LoginStyledForm>
    </LoginStyled>
  );
};

export default Login;
