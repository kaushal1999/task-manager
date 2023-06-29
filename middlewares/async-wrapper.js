const asyncWrapper = (fn) =>{
    return async (req,res,next) =>{
       try {
          await fn(req,res,next) 
       } catch (error) {
         res.send("er")
       }   
    }
}

module.exports=asyncWrapper