const {jwtSignAccsess, jwtSignRehresh } = require('../utils/jwtTokenVerify');
const { RefreshToken } = require('../models/index');

module.exports = async (req, res, next) => {

    const user = Object.assign({},req.body.user);
    let tokenPair = {};

    try{
        tokenPair.accessToken = await jwtSignAccsess(user.email, user.firstName, user.role);
        tokenPair.refreshToken = await jwtSignRehresh(user.id);

        await RefreshToken.create({userId: user.id, tokenString: tokenPair.refreshToken});

        return res.send({
            user,
            tokenPair,
        });
    }catch (err) {
        next(err)
    }
};
