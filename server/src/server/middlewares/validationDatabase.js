const yupValidation = require("../utils/yupValidationDatabase");

module.exports.createUser = async (req, res, next) => {
    try {
        await yupValidation.createUser.validate(req.body);
        next();
    } catch (err) {
        next(err);
    }
};

module.exports.loginUser = async (req, res, next) => {
    try{
        await yupValidation.loginUser.validate(req.body);
        next();
    } catch (err) {
        next(err);
    }
};