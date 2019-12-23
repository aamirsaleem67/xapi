const expressLoader = require("./express.loader");
const Logger = require("./logger.loader");

module.exports = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");
};
