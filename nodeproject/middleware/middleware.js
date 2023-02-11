const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
  const Token = req.headers?.authorization?.split(" ")[1];
    //const Token=req.headers['token'];
  jwt.verify(Token, "do_not_share", function(err, decoded){
    if(err){
        res.status(401).json({status:'unauthorized'})
    }else{
        let email=decoded['data'];
        // console.log(email);
        req.headers.email=email;
        next()
    }
  })

}
