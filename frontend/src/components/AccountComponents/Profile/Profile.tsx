import React from "react";
import AccountHeader from "../AccountHeader/AccountHeader";
import {
  ProfileStyled,
  ProfileStyledContent,
  ProfileStyledHeaderItem,
} from "./Profile.styled";
import { TbTrash } from "react-icons/tb";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

const Profile = () => {
  return (
    <ProfileStyled>
      <AccountHeader title="My profile">
        <ProfileStyledHeaderItem>
          <TbTrash /> Delete account
        </ProfileStyledHeaderItem>
      </AccountHeader>
      <ProfileStyledContent method="POST">
        <div>
          <Input
            name="name"
            variant="large"
            placeholder="Enter first Name"
            label="First Name"
            type="text"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="email"
            variant="large"
            placeholder="Enter email"
            label="Email"
            type="email"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="password"
            variant="large"
            placeholder="Enter password"
            label="Password"
            type="password"
            icon="password"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="country"
            variant="large"
            placeholder="Enter country"
            label="Counttry"
            type="select"
            icon="select"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="address"
            variant="large"
            placeholder="Enter Address"
            label="Address"
            type="text"
            onChange={(e) => console.log(e)}
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
            onChange={(e) => console.log(e)}
          />

          <Input
            name="phone"
            variant="large"
            placeholder="Enter Phone Number"
            label="Phone"
            type="text"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="confirm-password"
            variant="large"
            placeholder="Enter Confirm Password"
            label="Confirm Password"
            type="password"
            icon="password"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="city"
            variant="large"
            placeholder="Enter city"
            label="City"
            type="select"
            icon="select"
            onChange={(e) => console.log(e)}
          />
          <Input
            name="zip"
            variant="large"
            placeholder="Enter ZIP Code"
            label="ZIP Code"
            type="text"
            onChange={(e) => console.log(e)}
          />
        </div>
      </ProfileStyledContent>
    </ProfileStyled>
  );
};

export default Profile;
