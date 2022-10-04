const { selectUserByUsername } = require('../services/users')
const { hash } = require("../utils/crypto");
const loginController = async (req, res) => {
  const { body } = req;
  try {
    const [user] = await selectUserByUsername(body.username);
    const valid = await hash(body.password, user.password);
    const resp = !valid ? res.status(401) : res.status(200)
    return resp.send({
      ok: valid,
      msg: valid ? "Welcome" : "This password is wrong",
      data: valid ? user.fullname : null
    })
  } catch (error) {
    return res.status(400).send({
      ok: false,
      msg: error.toString(),
    });
  }
};

module.exports = {
  loginController,
};
