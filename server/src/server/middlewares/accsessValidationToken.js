const { verifyToken } = require('../utils/jwtTokenVerify');

const { ForbiddenErrors, AuthenticationTimeout } = require("../errors/errors");

module.exports = async (req, res, next) => {
    const authHeader = req.get("Authorization");
    if(!authHeader) next(new ForbiddenErrors("Not token"));

    const accessToken = authHeader.replace('Bearer ','');

    try{
        req.decoded = await verifyToken(accessToken, 'A');
        next();
    }catch (err) {
        next(new AuthenticationTimeout());
    }
};
