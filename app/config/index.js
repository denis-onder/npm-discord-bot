require("dotenv").config();

module.exports = {
  token: process.env.TOKEN,
  keyword: "!npm",
  serverPort: process.env.PORT || 9000
};
