const path = require("path");

module.exports = {
  // Ensure Next.js maps react-native imports to react-native-web
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    return config;
  },

  // Silence the Turbopack root warning by explicitly setting the root
  turbopack: {
    root: __dirname,
  },
};
