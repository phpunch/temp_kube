const proxy = require("http-proxy-middleware");

const path = process.env.API_ENDPOINT || 'localhost'


module.exports = function(app) {
  console.log(path)
  app.use(
    proxy("/api/", {
      target: `http://${path}:5000`
    })
  );
};
