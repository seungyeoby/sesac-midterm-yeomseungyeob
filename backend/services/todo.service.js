const todoRepository = require('../repositories/todo.repository.js');



class TodoService {
  async createPost(userId, title, isComplete) {
    return await todoRepository.createTodo(userId, title, isComplete)
  }

  async findAllTodos() {
    return await todoRepository.findAllTodos();
  }

  async getPostByPostId(todoId) {
    return await todoRepository.findTodoByTodoId(todoId);
  }

  async updatePost(todoId,title, isComplete) {
    return await todoRepository.updateTodo(todoId, title, isComplete)
  }

  async deletePost(todoId) {
    return await todoRepository.deleteTodo(todoId);
  }
}

module.exports=  new TodoService()