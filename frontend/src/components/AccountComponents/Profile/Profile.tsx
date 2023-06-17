import React, { useState } from "react";
import { Faded } from "baby-i-am-faded";
import "baby-i-am-faded/styles.css";
import AccountHeader from "../AccountHeader/AccountHeader";
import {
  ProfileStyled,
  ProfileStyledContent,
  ProfileStyledHeaderItem,
} from "./Profile.styled";
import { TbTrash } from "react-icons/tb";

import Input from "components/Input/Input";
import Button from "UI/Button/Button";
import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { setAuth } from "components/AuthComponents/Login/store/useAuth";
import API_URL from "config";
import axios from "axios";
import Alert from "components/Alert/Alert";
import { useNavigate } from "react-router-dom";
import useRedirectNotAuth from "utils/hooks/useRedirectNotAuth";

const Profile = () => {
  const user = useTypedSelector((state) => state.authSlice);
  useRedirectNotAuth();
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  if (user.fullname === "") {
    console.log(user);
    navigate("/");
  }

  const [success, setSuccess] = useState(false);

  const [userData, setUserData] = useState({
    firstName: user.fullname.split(" ")[0],
    lastName: user.fullname.split(" ")[1],
    email: user.email,
    password: "",
    passwordConfirm: "",
    country: user.shipping?.country,
    city: user.shipping?.city,
    zip: user.shipping?.zip,
    address: user.shipping?.address,
    phone: user.shipping?.phone,
  });

  const setName = (name: string) =>
    setUserData((prevState) => {
      return { ...prevState, firstName: name };
    });
  const setLastName = (lastname: string) =>
    setUserData((prevState) => {
      return { ...prevState, lastName: lastname };
    });
  const setEmail = (email: string) =>
    setUserData((prevState) => {
      return { ...prevState, email };
    });
  const setPhone = (phone: string) =>
    setUserData((prevState) => {
      return { ...prevState, phone };
    });
  const setPassword = (password: string) =>
    setUserData((prevState) => {
      return { ...prevState, password };
    });
  const setPasswordConfirm = (passwordConfirm: string) =>
    setUserData((prevState) => {
      return { ...prevState, passwordConfirm };
    });
  const setCountry = (country: string) =>
    setUserData((prevState) => {
      return { ...prevState, country };
    });
  const setCity = (city: string) =>
    setUserData((prevState) => {
      return { ...prevState, city };
    });
  const setZip = (zip: string) =>
    setUserData((prevState) => {
      return { ...prevState, zip };
    });
  const setAddress = (address: string) =>
    setUserData((prevState) => {
      return { ...prevState, address };
    });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    let data: {
      password?: string;
      email: string;

      fullname: string;
      zip: string | undefined;
      address: string | undefined;
      country: string | undefined;
      city: string | undefined;
      phone: string | undefined;
    } = {
      fullname: userData.firstName + " " + userData.lastName,
      email: userData.email,

      zip: userData.zip,
      address: userData.address,
      country: userData.country,
      city: userData.city,
      phone: userData.phone,
    };
    if (
      userData.password !== "" &&
      userData.passwordConfirm !== "" &&
      userData.password === userData.passwordConfirm
    ) {
      //
      data.password = userData.password;
    }

    axios
      .put(`${API_URL}account/profile/update/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(setAuth({ token: user.token, ...response.data }));
          setTimeout(() => console.log(user), 500);
          setPassword("");
          setPasswordConfirm("");
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
        } else {
        }
      });
  };

  return (
    <ProfileStyled>
      <AccountHeader title="My profile">
        <ProfileStyledHeaderItem>
          <TbTrash /> Delete account
        </ProfileStyledHeaderItem>
      </AccountHeader>

      {success && (
        <Faded>
          <Alert variant="success">Your profile was updated!</Alert>
        </Faded>
      )}

      <ProfileStyledContent autoComplete="off" onSubmit={submit}>
        <div>
          <Input
            name="name"
            variant="large"
            placeholder="Enter first Name"
            label="First Name"
            type="text"
            onChange={(e) => setName(e)}
            value={userData.firstName}
          />
          <Input
            name="email"
            variant="large"
            placeholder="Enter email"
            label="Email"
            type="email"
            onChange={(e) => setEmail(e)}
            value={userData.email}
          />
          <Input
            name="password"
            variant="large"
            placeholder="Enter password"
            label="Password"
            type="password"
            icon="password"
            value={userData.password}
            onChange={(e) => setPassword(e)}
          />
          <Input
            name="country"
            variant="large"
            placeholder="Enter country"
            label="Counttry"
            type="select"
            icon="select"
            onChange={(e) => setCountry(e)}
            value={userData.country}
          />
          <Input
            name="address"
            variant="large"
            placeholder="Enter Address"
            label="Address"
            type="text"
            onChange={(e) => setAddress(e)}
            value={userData.address}
          />
          <Button
            type="submit"
            variant="solid"
            styleType="default"
            size="large"
          >
            Save changes
          </Button>
        </div>
        <div>
          <Input
            name="last-name"
            variant="large"
            placeholder="Enter last Name"
            label="Last Name"
            type="text"
            onChange={(e) => setLastName(e)}
            value={userData.lastName}
          />

          <Input
            name="phone"
            variant="large"
            placeholder="Enter Phone Number"
            label="Phone"
            type="text"
            onChange={(e) => setPhone(e)}
            value={userData.phone}
          />
          <Input
            name="confirm-password"
            variant="large"
            placeholder="Enter Confirm Password"
            label="Confirm Password"
            type="password"
            icon="password"
            onChange={(e) => setPasswordConfirm(e)}
            value={userData.passwordConfirm}
          />
          <Input
            name="city"
            variant="large"
            placeholder="Enter city"
            label="City"
            type="select"
            icon="select"
            onChange={(e) => setCity(e)}
            value={userData.city}
          />
          <Input
            name="zip"
            variant="large"
            placeholder="Enter ZIP Code"
            label="ZIP Code"
            type="text"
            onChange={(e) => setZip(e)}
            value={userData.zip}
          />
        </div>
      </ProfileStyledContent>
    </ProfileStyled>
  );
};

export default Profile;
