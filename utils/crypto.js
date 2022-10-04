const bcrypt = require("bcrypt");
const hash = async (password, passworddb) => await bcrypt.compare(password, passworddb)
module.exports = { hash };