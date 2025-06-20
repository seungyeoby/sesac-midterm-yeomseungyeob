const express = require('express');
const router = express.Router();
const prisma = require('../utils/prisma/index.js')
const authenticateToken = require('../middleware/authenticate-middleware.js')
const { todosValidator,getTodosValidator,handleValidation ,putTodosValidator} = require('../middleware/validation-result-handler.js')
const { checkPostOwner  } =require('../middleware/authorization-middleware.js')
const todoController = require('../controllers/todo.controller.js')

// 글 생성 (로그인 된 사람만 작성할 수 있다고 가정)
router.post('/todos',authenticateToken, todosValidator, handleValidation, postController.createPost)

// 전체 글 조회  (누구나 조회 가능 하게 / 작성자 정보도 같이 보냄 )
router.get('/todos', postController.findAllPosts)

// 특정 글 조회  (누구나 조회 가능 하게)
router.get('/todos/:todoId',getTodosValidator, handleValidation, todoController.getTodoByTodoId)

// 글 수정 (작성자만 가능하게 )
router.put('/todos/:todoId', authenticateToken,  putTodosValidator, handleValidation, checkPostOwner,todoController.updateTodo)

// 글 삭제  (작성자만 가능하게 )
router.delete('/todos/:todoId',  authenticateToken,  getTodosValidator, handleValidation, checkPostOwner,todoController.deleteTodo)

module.exports = router;