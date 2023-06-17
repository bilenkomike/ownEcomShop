import React, { useState } from "react";
import Button from "components/Button/Button";
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
import axios from "axios";
import API_URL from "config";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "store/hooks";
import { setAuth } from "../Login/store/useAuth";
import Links from "utils/routes/Links";

const Register: React.FC<{
  toggleRegister: () => void;
  toggleLogin: () => void;
}> = ({ toggleRegister, toggleLogin }) => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [expires, setExpires] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return;
    }

    axios
      .post(`${API_URL}account/register/`, {
        email,
        fullname,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(setAuth({ ...response.data, expires: expires ? 7 : 1 }));
          setFullname("");
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
          navigate(Links.accountProfile);
          toggleRegister();
        }
      });
  };

  const linkClick = () => {
    toggleLogin();
    toggleRegister();
  };

  return (
    <RegisterStyled onClick={toggleRegister}>
      <RegisterStyledForm
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
      >
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
          onChange={setFullname}
          value={fullname}
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
          onChange={setPasswordConfirm}
          value={passwordConfirm}
          placeholder="Your working password again"
        />

        <CheckBox
          text="Remember me"
          checked={expires}
          onChange={() => setExpires(!expires)}
        />

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
          <RegisterStyledLink onClick={linkClick}> Sign in </RegisterStyledLink>
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
