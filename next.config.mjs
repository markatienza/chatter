/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_AUTH_CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
        GOOGLE_AUTH_CLIENT_SECRET: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    }
};

export default nextConfig;
