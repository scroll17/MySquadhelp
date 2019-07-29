import db from './../models'

const error = require("../errors/errors");
const { User, RefreshToken } = require('../models/index');
const sequelize = db.sequelize;

const { verifyToken } = require('../utils/jwtTokenVerify');

module.exports.createUser = async (req, res, next) => {
    const body = Object.assign({},req.body);
    try{
        const [user, created] = await User.findOrCreate({
            where: {email: body.email}, defaults: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                gender: body.gender,
                role: body.role,
                password: body.hash
            },
        });
        if (!created) return next({code: 401, message: 'Such user already exists'});
        req.body.user = user.dataValues;
        next();
    }catch (err){
        next(err)
    }
};


module.exports.loginUser = async (req,res,next) => {
    const {email , password} = req.body;
    try{
        const foundUser = await User.findOne({ where: {email: email}});
        if(!foundUser) return next(new error.NotFound());
        req.body.user = foundUser.dataValues;
        req.body.password = password;
        next()
    }catch (err) {
        next(err);
    }
};



module.exports.refreshUser = async (req,res,next) => {
    const {refreshToken} = req.body;
    let transaction = await sequelize.transaction();
    try{
        const token = await RefreshToken.findOne({
            where: { tokenString: refreshToken },
            transaction,
        });

        const userId = token.dataValues.userId;
        await verifyToken(refreshToken, "R");
        req.user = await User.findByPk(userId);
        next()
    }catch (err) {
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

module.exports.getAllUsers = async (req, res, next) => {
    try{
        const count  = await User.count({ where: {firstName: "Denis"}, raw: true });
        res.send({count: count});
    }catch (err) {
        next(err)
    }
};



module.exports.updateUser = (req, res, next) => {
/*    const {email, password, role, ...other} = req.body;
    User.findByIdAndUpdate(req.params.id, other, {new: true, runValidators:true})
        .then( updateUser => res.send(updateUser))
        .catch( err => next(err));*/
};

module.exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.findAll({order: [['email', 'ASC'], ['id', 'ASC']]});
        res.send(users);
    }catch (e) {
        return next(e)
    }
};
