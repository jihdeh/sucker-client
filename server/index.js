// app.js
require("babel-register");
require("babel-polyfill");

require.extensions['.css'] = () => {
  return;
};


require("./app-server.js");
