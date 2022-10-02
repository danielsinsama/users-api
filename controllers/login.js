const {selectAllUsers} = require('../services/users')
const { hash } = require("../utils/crypto");
const loginController = async (req, res) => {
  const { body } = req;
  try {
    const [user] = await selectAllUsers(body.username);
    const valid = await hash(body.password, user.password);
    // console.log('user: ',user);
    res.status(200).send({
      ok: valid,
      user: user.fullname,
    });
  } catch (error) {
    res.status(400).send({
      ok: false,
      data: error.toString(),
    });
  }
};

module.exports = {
  loginController,
};
