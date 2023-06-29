const errorHandler = (error,req,res,next) => {
    return res.status(error.status).json(error.message);
}

module.exports=errorHandler