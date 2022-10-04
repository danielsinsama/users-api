const bcrypt = require("bcrypt");
const hash = async (password, passworddb) => {
  return await bcrypt.compare(password, passworddb);
};
module.exports = { hash };
