const error = require("../errors/errors");
const { User, RefreshToken } = require('../models/index');


module.exports.createContest = async (req, res, next) => {
    const body = Object.assign({},req.body);
    console.log(body);
    try{
/*        const [user, created] = await User.findOrCreate({
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
        next();*/

        res.status(201).send('Created !')

    }catch (err){
        console.log(err);
        next(err)
    }
};

