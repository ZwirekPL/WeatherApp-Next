/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "openweathermap.org"],
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
};
