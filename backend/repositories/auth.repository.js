const prisma = require('../utils/prisma/index.js')



class AuthRepository {

  async findByEmail(email) {
    console.log("findByEmail")
    return await prisma.users.findFirst({
      where : {
        email
      }
    })
  }

  async createUser(email, password,nickname) {
    return await prisma.users.create({
      data : {
        email,
        password,
        username
      }
    })
  }

}

module.exports = new AuthRepository()