"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const isMobile = useCheckMobileScreen()

  return (
    <div className="flex flex-row flex-wrap p-10">
      {/* Form Container */}
      <div className="flex flex-col justify-center items-center">
        {/* Form Header */}
        <div className="flex flex-col items-center text-center mb-10 gap-4 max-w-sm">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
          <p className="text-sm text-gray-500">
            Get connected with your love ones with Chatter. Get started for
            free.
          </p>
        </div>

        {/* Form Inputs */}
        <div className="form-inputs flex flex-col gap-4 w-full">
          <input
            className="rounded-md border-2 border-gray-300 p-3"
            type="email"
            placeholder="Username"
          />

          <div className="relative flex items-center">
            <input
              className="rounded-md border-2 border-gray-300 p-3 w-full"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setPasswordShown(!passwordShown)}
            >
              {passwordShown ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
          <div className="flex flex-row justify-end">
            <a className="text-sm text-gray-500" href="#">
              Forgot Password?
            </a>
          </div>
          <button className="rounded-md bg-black p-3 text-white">Login</button>
        </div>

        {/* Form Divider */}
        <div className="my-7 flex items-center justify-center w-full">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-700">or continue with</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-10">
          <SocialIcon network="google" bgColor="#000" onClick={() => {}} />
          <SocialIcon network="facebook" bgColor="#000" onClick={() => {}} />
          <SocialIcon network="github" bgColor="#000" onClick={() => {}} />
        </div>
        {/* Form footer */}
        <div className="mt-8 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <a href="#" className="text-blue-600 hover:underline">
            Register now
          </a>
        </div>
      </div>
      {!isMobile && <div id="image-container">test</div>}
    </div>
  );
}
