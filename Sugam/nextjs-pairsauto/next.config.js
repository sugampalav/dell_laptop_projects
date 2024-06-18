/** @type {import('next').NextConfig} */
// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/": { page: "/" },
//       // "/Services": { page: "/Services" },
//       "/Inventory": { page: "/Inventory" },
//       "/AboutUs": { page: "/AboutUs" },
//       "/ContactUs": { page: "/ContactUs" },
//     };
//   },
//   reactStrictMode: true,
//   trailingSlash: true,
// };

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      // "/": { page: "/" },
      // "/about": { page: "/about" },
    };
  },
};
