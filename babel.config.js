
module.exports = exports = {
  plugins: [
    // [ '@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true } ],
    // [ "@babel/plugin-proposal-class-properties", { loose: true } ],
  ],
  presets: [
    [ '@babel/preset-env', {
      modules: false,
      useBuiltIns: 'usage',
      corejs: { version: 3, shippedProposals: true },
    } ],
  ],
};
