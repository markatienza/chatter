import Next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_AUTH_CLIENT_ID: string;
      GOOGLE_AUTH_CLIENT_SECRET: string;
      NEXT_PUBLIC_REACT_AUTH_APP_ID: string;
      NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
      NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string;
    }
  }
}
