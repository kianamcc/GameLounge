const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/games", {
      target: "https://api.igdb.com/v4",
      changeOrigin: true,
    })
  );
};
