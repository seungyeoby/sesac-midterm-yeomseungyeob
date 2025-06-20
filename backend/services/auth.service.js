class AuthService {
  async signUp(email, password, nickname)  {

    // 입력 받은 데이터 베이스에 값이 있늕지 검사
    const existingUser = await authRepository.findByEmail(email);
    if(existingUser) {
       throw new Error("ExistEmail");
    }
    // 암호화 작업 (bcrypt)
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(
      password,
      salt
    )

    const newUser = await authRepository.createUser(email, bcryptPassword, nickname)
    return {userId : newUser.userId}

  }

  async logIn (email, password) {

    console.log('service.login')

    //  유저가 없는 경우
    const existingUser = await authRepository.findByEmail(email);
    console.log(existingUser)
    if(!existingUser) {
       throw new Error("UserNotFound");
    }

    // 유저가 있음 
     const verifyPassword = await bcrypt.compare(password, existingUser.password);
          console.log(verifyPassword)
          if(!verifyPassword) {
            throw new Error("password");
          }

           const token = jwt.sign({
                  userId : existingUser.userId
                }, SECRET_KEY, {
                  expiresIn : "12h"
                })
          
          return  {token : token}
  }
}

module. exports = new AuthService();