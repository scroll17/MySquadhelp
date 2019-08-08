const error = require("../errors/errors");
const { User, Contests } = require('../models/index');


module.exports.createContest = async (req, res, next) => {
    const body = Object.assign({},req.body);
    console.log('body',body);

    try{

        const contest = await Contests.create( body );
        console.log('contest', contest.dataValues);

        res.status(201).send('Created !')

    }catch (err){
        console.log(err);
        next(err)
    }
};

