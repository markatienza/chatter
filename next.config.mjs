/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_AUTH_CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
    GOOGLE_AUTH_CLIENT_SECRET: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    NEXT_PUBLIC_REACT_AUTH_APP_ID: process.env.NEXT_PUBLIC_REACT_AUTH_APP_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET:process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
  },
};

export default nextConfig;
