"use client";

import React, { FunctionComponent, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

type GithubLoginProps = {};

const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET;
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

const GithubLogin = () => {
  const login = () => {
    window.location.href = githubOAuthURL;
  };
  const handleLogin = async (code: string) => {
    try {
      console.log({ code });
      // Exchange the code for an access token
      const data = await fetch("/api/github-access-token", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
      console.log(data);
      // Fetch the user's GitHub profile
      const userProfile = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${data.data.access_token}`,
          "User-Agent": "Your-App-Name",
        },
      }).then((res) => res.json());
      console.log(`Welcome, ${JSON.stringify(userProfile)}!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGitHubCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code) {
      handleLogin(code);
    }
  };

  React.useEffect(() => {
    handleGitHubCallback();
  }, [handleGitHubCallback]);

  return (
    <div>
      <SocialIcon
        network="github"
        bgColor="#000"
        className="cursor-pointer"
        onClick={login}
      />
    </div>
  );
};

export default GithubLogin;
