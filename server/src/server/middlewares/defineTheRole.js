const error = require("../errors/errors");
const { User } = require('../models/index');

const { verifyToken } = require('../utils/jwtTokenVerify');

module.exports = (url) => async (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) next(new error.Forbidden("Not token"));
    const accessToken = authHeader.replace('Bearer ', '');


    switch (url) {
        case('/AllUser'):{
            try {
                const decoded = await verifyToken(accessToken, 'A');
                if (decoded.role !== "admin") return next(new error.Forbidden());
                next();
            } catch (err) {
                next(new error.AuthenticationTimeout());
            }
            break;
        }
        case('/user/:id'):{
            const { id } = req.params;
            try {
                const decoded = await verifyToken(accessToken, 'A');

                if (decoded.role !== "admin" || id === `${decoded.id}` )
                    return next(new error.Forbidden());


                const foundUser = await User.findOne({ where: {id: id}});
                if(foundUser.dataValues.role === "admin")
                    return next(new error.Forbidden());

                next();
            } catch (err) {
                next(new error.AuthenticationTimeout());
            }
            break;
        }
        default:
            console.log('default');
            next();
    }
};


