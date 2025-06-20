const jwt = require('jsonwebtoken')
const SECRET_KEY = "sessac";


module.exports = function authenticateToken(req, res, next){
  const authHeder = req.headers['authorization'];
  const token = authHeder && authHeder.split(' ')[1]; 
  console.log(token)

  // req.password = "1234";
 
  // if(req.password !=="1234") {
  //   // return next(new Error("password"));
  // }
  
  const verifiedToken = verifyToken(token);
  console.log(verifiedToken)
  if(!verifiedToken) {
    return next(new Error("Need LogIn"));
  }

  req.user = verifiedToken;
  next(); //다음 함수로 이동 하는 함수
   
}

function verifyToken(token) {
  try{
    return jwt.verify(token, SECRET_KEY);
  }catch(e) {
    return false
  }
}