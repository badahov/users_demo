module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    //["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "env": {
    "production": {
      "plugins": ["transform-react-remove-prop-types"]
    }
  }
};