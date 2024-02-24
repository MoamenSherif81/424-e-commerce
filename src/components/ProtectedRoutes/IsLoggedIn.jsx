import React from "react";
import { useRecoilState } from "recoil";
import { authData } from "../../atoms/authAtom";
import { Navigate } from "react-router";

export default function IsLoggedIn({ children }) {
  const [authdata] = useRecoilState(authData)

  if(!authdata.isAuth) return <Navigate to="/login"/>;

  return <div>{children}</div>;
}