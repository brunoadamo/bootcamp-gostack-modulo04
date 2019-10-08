module.exports = {
  presets: [
    "@babel/preset-env", //java scrip - import, export, arrow functions ...
    "@babel/preset-react" //transform react to browser language
  ],
  plugins: ["@babel/plugin-proposal-class-properties"] //for babel reconize the state structure
};
