const dashboardRoute = require("./dashboard.route");
const productsRoute = require("./products.route");
const systemConfig = require("../../config/system");

module.exports.index = (app) => {
  const path = `/${systemConfig.prefixAdmin}`;

  app.use(`${path}/dashboard`, dashboardRoute);

  app.use(`${path}/products`, productsRoute);
}