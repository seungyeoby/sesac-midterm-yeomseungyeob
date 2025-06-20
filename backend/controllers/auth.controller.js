const authService = require ('../services/auth.service.js')

class AuthController {
  signUp = async (req, res, next) => {
    const { email, password, nickname } = req.body;

    const newUser = await authService.signUp(email, password, nickname);

    return res.status(201).json({
      message : "회원가입이 완료 되었습니다.",
      newUser
    }); 
  }


  //로그인 하기 
  logIn = async (req, res, next) => {
    const {email, password} = req.body;
    const logInUser =  await authService.logIn(email, password)
    console.log(logInUser)
    // return res.status(201).json({
    //   message : "로그인 성공!"
      
      
    // })


  }

// 요청과 응답을 담당
// 요청에 대한 처리는 서비스에게 위임

}
module.exports = new AuthController();