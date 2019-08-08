import db from './../models'

const error = require("../errors/errors");
const { User, RefreshToken } = require('../models/index');
const sequelize = db.sequelize;

const { verifyToken } = require('../utils/jwtTokenVerify');

module.exports.createUser = async (req, res, next) => {
    const body = Object.assign({},req.body);
    console.log(body);

    try{
        const [user, created] = await User.findOrCreate({
            where: {email: body.email}, defaults: {
                firstName: body.firstName,
                lastName: body.lastName,
                displayName: body.displayName,
                email: body.email,
                role: body.role,
                password: body.hash
            },
        });
        if (!created) return next(new error.InvalidCredentials());
        req.body.user = user.dataValues;
        next();
    }catch (err){
        console.log(err);
        next(err)
    }
};


module.exports.loginUser = async (req,res,next) => {
    console.log('tuuut');
    const {email , password} = req.body;
    try{
        const foundUser = await User.findOne({ where: {email: email}});
        if(!foundUser) return next(new error.NotFound());

        if(foundUser.dataValues.isBanned === "true") return next(new error.Forbidden());

        req.body.user = foundUser.dataValues;
        req.body.password = password;
        next()
    }catch (err) {
        next(err);
    }
};



module.exports.refreshUser = async (req,res,next) => {
    const {refreshToken} = req.body;
    try{
        const token = await RefreshToken.findOne({
            where: { tokenString: refreshToken },
        });

        const userId = token.dataValues.userId; //TODO
        await verifyToken(refreshToken, "R");
        req.user = await User.findByPk(userId, /*transaction*/ );

        next()
    }catch (err) {
        if(err.name === 'TokenExpiredError')
            return next(new InvalidCredentials(err.name));
        next(err)
    }
};


module.exports.accessUser = async (req,res,next) => {
    try{
        const user = await User.findOne({where: {email: req.decoded.email}});
        return res.send(user);
    }catch (err) {
        next(err)
    }
};


module.exports.updateUsersById = async (req, res, next) => {
    const { id } = req.params;
    const isBanned = !req.body.isBanned;
     try {
        const updatedUser = await User.update({ isBanned }, {where: {id}});

        if (true) {
            const user = await User.findOne({where: {id}});
            return res.send(user);
        } else {
            return next(new error.NotFound());
        }
    } catch (err) {
        next(err);
    }
};

module.exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.findAll({order: [['email', 'ASC'], ['id', 'ASC']]});
        res.send(users);
    }catch (e) {
        return next(e)
    }
};
