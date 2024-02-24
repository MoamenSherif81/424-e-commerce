import { atom } from "recoil";

const localAuthData = JSON.parse(localStorage.getItem("loggedInData"));

export const authData = atom({
  key: "auth-data",
  default: localAuthData
    ? localAuthData
    : {
        isAuth: false,
        user: null,
      },
});
