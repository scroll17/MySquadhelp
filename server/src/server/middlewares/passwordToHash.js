const bcrypt = require('bcrypt');
const { SALT_RONDS } = require("../utils/consts");

module.exports = async (req, res, next) => {
    const { password } = req.body;

    req.body.hash = await bcrypt.hash(password, SALT_RONDS);

    next();
};
