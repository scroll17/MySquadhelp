import db from "../models";
const sequelize = db.sequelize;

const {jwtSignAccsess, jwtSignRehresh } = require('../utils/jwtTokenVerify');
const { RefreshToken } = require('../models/index');


module.exports = async (req, res, next) => {
    //let transaction = await sequelize.transaction();

    const { user } = Object.assign({},req);
    let tokenPair = {};

    try{
        tokenPair.accessToken = await jwtSignAccsess(user.email, user.firstName, user.role);
        tokenPair.refreshToken = await jwtSignRehresh(user.id);

        const count = await RefreshToken.update( {tokenString: tokenPair.refreshToken}, {where: {userId: user.id}},  /*transaction*/ );

        /*transaction.commit();*/

        return res.send({
            user: req.user,
            tokenPair,
        });
    }catch (err) {
        next(err)
    }

};
