const prisma = require('../utils/prisma/index.js')


exports.checkPostOwner = async(req, res, next)=>{

  const { todoId } = req.params;
  const{ userId }= req.user;


const todo = await prisma.todo.findUnique({
  where : {
    todoId : +todoId
  }
})

if(!todo) {
  return next(Error("TodoNotFound"))
}

if(Number(todo.userId) !==  Number(userId)) {
  return next(Error("Forbidden"))
}
  // userId 를 post 와 userId가 동일한 지 확인 
res.locals.todo = todo;
next();

}