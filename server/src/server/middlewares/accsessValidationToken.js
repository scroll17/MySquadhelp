const { verifyToken } = require('../utils/jwtTokenVerify');

module.exports = async (req, res, next) => {

    const authHeader = req.get("Authorization");
    if(!authHeader) next({code: 999, message: "Not token"});

    const accessToken = authHeader.replace('Bearer ','');

    try{
        req.decoded = await verifyToken(accessToken, 'A');
        next();
    }catch (err) {
        next(err)
    }
};