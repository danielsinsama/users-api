const bcrypt = require("bcrypt");
const hash = async (password, passworddb) => {
  const valid = await bcrypt.compare(password, passworddb);
  return valid;
};
module.exports = { hash };
