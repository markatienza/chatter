import React, { useEffect } from "react";
import FacebookLoginButton, {
  FacebookLoginClient,
  FailResponse,
  ProfileSuccessResponse,
  SuccessResponse,
} from "@greatsumini/react-facebook-login";
import { SocialIcon } from "react-social-icons";

const FacebookLogin = () => {
  useEffect(() => {
    FacebookLoginClient.init({
      appId: process.env.NEXT_PUBLIC_REACT_AUTH_APP_ID,
    });
  }, []);

  return (
    <FacebookLoginButton
      appId={process.env.NEXT_PUBLIC_REACT_AUTH_APP_ID}
      onSuccess={(response: SuccessResponse) => {
        console.log("Login Success!", response);
      }}
      onFail={(error: FailResponse) => {
        console.log("Login Failed!", error);
      }}
      onProfileSuccess={(response: ProfileSuccessResponse) => {
        console.log("Get Profile Success!", response);
      }}
      children={
        <SocialIcon
          network="facebook"
          bgColor="#000"
          className="cursor-pointer"
        />
      }
    />
  );
};

export default FacebookLogin;
