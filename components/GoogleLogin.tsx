"use client";

import React, { FunctionComponent, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import {
  TokenResponse,
  useGoogleLogin,
} from "@react-oauth/google";

type GoogleLoginProps = {};

const GoogleLogin: FunctionComponent<GoogleLoginProps> = () => {
  const onSuccess = async (response: TokenResponse) => {
    try {
      const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${response.access_token}`,
        },
      });
      const data = await res.json();
      console.log("onSuccess", data);
    } catch (error) {
      console.log("onSuccess", error);
    }
  };
  const login = useGoogleLogin({
    onSuccess,
  });

  return <SocialIcon network="google" bgColor="#000" onClick={login} className="cursor-pointer"/>;
};

export default GoogleLogin;
