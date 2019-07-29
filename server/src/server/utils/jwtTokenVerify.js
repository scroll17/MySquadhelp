const { ACSSES_SECRET, REFRESH_SECRET, EXPIRES_IN_ACSSES, EXPIRES_IN_REFRESH } = require("./consts");
const jwtTokenVerify = require('jsonwebtoken');
const util = require('util');


const singToken = util.promisify(jwtTokenVerify.sign);
const verifyToken = util.promisify(jwtTokenVerify.verify);

module.exports.jwtSignAccsess = (email, name, userRole) => {
    try{
       return singToken({email: email, name: name, userRole: userRole }, ACSSES_SECRET, {expiresIn: EXPIRES_IN_ACSSES});
    }catch (err) {
        return next(err)
    }
};

module.exports.jwtSignRehresh = (userId) => {
    try{
        return singToken({ userId: userId }, REFRESH_SECRET, {expiresIn: EXPIRES_IN_REFRESH })
    }catch (err) {
        return next(err)
    }
};

module.exports.verifyToken = (token, type) => {
    const secret = type === 'R' ? REFRESH_SECRET : ACSSES_SECRET;
    return verifyToken(token, secret);
};


