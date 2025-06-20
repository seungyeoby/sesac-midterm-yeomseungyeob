const todoService = require('../services/todo.service.js');


class TodoController  {
  // 게시글 생성
  async createTodo(req, res, next){
   const { title, isComplete} = req.body;
    const userId = req.user.userId;

    const newTodo = await todoService.createTodo(userId, title, isComplete)

    res.status(200).json({
       message : "글이 등록 되었습니다.",
       data : newTodo
    })
  }

  // 전체 게시글 조회
  findAllTodos = async (req, res, next) => {
    const todos = await todoService.findAllTodos()

    res.status(200).json({
      message : "전체 글 조회가 완료되었습니다.",
      data : todos
    })
  }
  
  // 특정 게시글 조회 
  getTodoByTodoId = async (req, res, next) => {
    const {todoId} = req.params;
    const todo = await todoService.getTodoByTodoId(+todoId)
    
      return res.status(200).json({
      message : "조회 성공",
      data : todo
    })
  }

  //  게시글 수정
  updatePost = async(req, res, next) => {
    const {todoId} = req.params;
    const {title, isComplete} = req.body

    const updatePost = await todoService.updateTodo(+todoId,title, isComplete)

    return res.status(200).json({
    message : "게시글 수정 완료!",
    data : updatePost
  })

  }

  // 게시글 삭제 
  deletePost = async(req, res, next) => {
    const todoId = Number(req.params.todoId);

    const todo  = await todoService.deleteTodo(+todoId)

    if(!todo) { 
      return res.status(400).json({
      message : "게시글을 찾을 수 없습니다."
    })
    }
    return res.status(200).json({
      message : "게시글을 삭제 하였습니다."
    })
  }
}

module.exports = new TodoController()