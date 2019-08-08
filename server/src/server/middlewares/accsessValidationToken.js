const {verifyToken} = require('../utils/jwtTokenVerify');

const {ForbiddenError, AuthenticationTimeout} = require("../errors/errors");

module.exports = async (req, res, next) => {
    const authHeader = req.get("Authorization");
    try {
        if (authHeader) {
            const accessToken = authHeader.replace('Bearer ', '');
            req.decoded = await verifyToken(accessToken, 'A');
            next();
        } else {
            return next(new ForbiddenError("Not token"));
        }

    } catch (err) {
        next(new AuthenticationTimeout(err));
    }
};
