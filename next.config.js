/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require("next-images");
// eslint-disable-next-line no-undef
module.exports = withImages({
  distDir: "build",
  trailingSlash: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["amazonaws.com"],
  },
});
