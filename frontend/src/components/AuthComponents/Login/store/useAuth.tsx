import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMG_URL } from "config";
import { setCookie, getCookie, removeCookie } from "typescript-cookie";

export type UserType = {
  token: string | "";
  username: string | "";
  email: string | "";
  fullname: string | "";
  id: number | "";
  isAdmin: boolean | "";
  shipping: {
    address: string | "";
    city: string | "";
    country: string | "";
    id: number | "";
    phone: string | "";
    user: number | "";
    zip: string | "";
  } | null;
};

interface UserWithTokenType extends UserType {
  token: string | "";
}

interface UserExpires extends UserWithTokenType {
  expires: number;
}

const cookie_user = getCookie("user");

const iniitlaStateData: UserWithTokenType = {
  token: "",
  username: "",
  email: "",
  fullname: "",
  id: "",
  isAdmin: "",
  shipping: {
    address: "",
    city: "",
    country: "",
    id: "",
    phone: "",
    user: "",
    zip: "",
  },
};

const initialState: UserWithTokenType =
  cookie_user !== undefined ? JSON.parse(cookie_user) : iniitlaStateData;

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<UserExpires>) => {
      console.log(action.payload);

      const user = {
        email: action.payload.email,
        username: action.payload.username,
        fullname: action.payload.fullname,
        id: action.payload.id,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token,
        shipping: action.payload.shipping,
      };
      setCookie("user", JSON.stringify(user), {
        expires: action.payload.expires,
        path: IMG_URL,
      });

      return user;
    },
    unSetUser: () => {
      removeCookie("user", {
        path: IMG_URL,
      });
      return iniitlaStateData;
    },
  },
});

export default authSlice;
export const { setAuth, unSetUser } = authSlice.actions;
