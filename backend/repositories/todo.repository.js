const prisma = require('../utils/prisma/index.js')

class TodoRepository {
  async createTodo(userId, title, isComplete) {
      return await prisma.todos.create({
        data : {
          userId,
          title,
          isComplete
        }
      })
  }

  async findAllTodos() {
    return  await prisma.todos.findMany ({
      include : { //include : join 관련된 것
        User : {
          select : {
            userId : true,
            username :true
          }
        }
      },
      orderBy :  {
        createdAt : 'desc'
      }
    });
  }

  async findTodoByTodoId(todoId) {
    return await prisma.todos.findUnique({
      where : {todoId : todoId},
      include : {
        User : {
          select : {
            userId : true,
            username : true
        }
      }
    }
  })
  }

  async updateTodo(todoId, title, isComplete) {
    return await prisma.todos.update({
    where :  {todoId : todoId},
    data : {
        title : title ,
        isComplete : isComplete ,
        updatedAt : new Date(),
      }
    })
  }

  async deleteTodo(todoId) {    
    return await prisma.todos.delete({
    where : {todoId},
    data : {
      deletedAt : new Date(),
    }
  })


  }
}

module.exports =new TodoRepository()