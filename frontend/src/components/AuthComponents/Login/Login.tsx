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
import axios from "axios";
import API_URL from "config";
import { useTypedDispatch } from "store/hooks";
import { setAuth } from "./store/useAuth";

import { useNavigate } from "react-router-dom";
import Links from "utils/routes/Links";

const Login: React.FC<{ toggleLogin: () => void; toggleRegister: () => void }> =
  ({ toggleLogin, toggleRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const navigate = useNavigate();

    const dispatch = useTypedDispatch();

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      axios
        .post(`${API_URL}account/login/`, {
          username: email,
          password,
          expires: remember ? 7 : 1,
        })
        .then((response) => {
          if (response.data.username === email) {
            dispatch(setAuth(response.data));
            setEmail("");
            setPassword("");
            navigate(Links.accountProfile);
            toggleLogin();
          }
        });
    };

    const linkClick = () => {
      toggleRegister();
      toggleLogin();
    };

    return (
      <LoginStyled onClick={toggleLogin}>
        <LoginStyledForm
          onClick={(e) => e.stopPropagation()}
          onSubmit={onSubmit}
        >
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
            <CheckBox
              checked={remember}
              onChange={() => setRemember(!remember)}
              text="Keep me signed in"
            />
            <LoginStyledLink>Forgot password?</LoginStyledLink>
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
            <LoginStyledLink onClick={linkClick}> Sign up </LoginStyledLink>
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
