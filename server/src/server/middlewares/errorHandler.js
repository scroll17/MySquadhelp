module.exports = (err,req,res,next) =>{

    console.log(`Error ${err.code}: ${err.message}`);

    if(!err.status)
        res.status(500).json(err);
    else {
        res.status(err.status).send( { statusText:err.message } )
    }
};
