module.exports = {
  'presets': [[
    '@babel/preset-env',{
      "useBuiltIns": "entry"
    }],
    '@babel/preset-react',
  ],
  'plugins': [
    '@babel/plugin-proposal-class-properties',
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
};