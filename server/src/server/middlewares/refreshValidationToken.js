const { RefreshToken } = require('../models/index');
const bcrypt = require('bcrypt');
const error = require("../errors/errors");

module.exports = async (req, res, next) => {

    const { password, user } = req.body;

    try{

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) return next(new error.InvalidCredentials());

        const count = await RefreshToken.count({where: {userId: user.id}});
        if(count >= 3) await RefreshToken.destroy({where: {userId: user.id}});

        next();

    }catch (err) {
        next(err)
    }
};
