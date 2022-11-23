import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.themoviedb.org/3",
      changeOrigin: true,
    })
  );
};
