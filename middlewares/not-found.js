const notFound = (req,res) => {
  return res.status(404).send("page doesn't exists")  
}
module.exports=notFound