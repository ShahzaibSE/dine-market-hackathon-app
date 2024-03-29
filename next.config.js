/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    psql: "postgres://default:Zmb7SkWxwI0g@ep-icy-hill-346142.us-east-1.postgres.vercel-storage.com:5432/verceldb",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  headers: [
    {
      key: "Access-Control-Allow-Origin",
      value: "*",
    },
  ],
};

module.exports = nextConfig;
