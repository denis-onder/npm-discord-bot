const axios = require("axios");

module.exports = async (package, cb) => {
  // Skip the API call if the package value is "help"
  if (package === "help") return cb(null, package);
  try {
    const { data } = await axios.get(`https://npmjs.com/package/${package}`);
    data ? cb(null, data) : cb(true, false);
  } catch (error) {
    return cb(true, false);
  }
};
