module.exports = {
  presets: [
    "@babel/react",
    "@babel/typescript",
    ["@babel/env", { modules: false }]
  ],
  plugins: ["babel-plugin-styled-components"]
};
