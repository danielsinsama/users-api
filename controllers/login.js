const { selectUserByUsername } = require('../services/users')
const { hash } = require("../utils/crypto");
const loginController = async (req, res) => {
  const { body } = req;
  try {
    const [user] = await selectUserByUsername(body.username);
    const valid = await hash(body.password, user.password);
    res.status(200).send({
      ok: valid,
      msg: valid ? "User accepted" : "Wrong username or password",
      data: valid ? user.fullname : null
    });
  } catch (error) {
    res.status(400).send({
      ok: false,
      msg: error.toString(),
    });
  }
};

module.exports = {
  loginController,
};
