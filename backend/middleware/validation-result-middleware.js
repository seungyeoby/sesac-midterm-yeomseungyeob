const { body,param ,validationResult } = require('express-validator')


exports.signUpValidator = [
  body('email')
  .isEmail().withMessage('이메일 형식이 아닙니다.')
  .notEmpty().withMessage('이메일이 없습니다.'),
  body('password')
  .isLength({min: 6}).withMessage('비밀번호가 6자 이하 입니다.')
  .notEmpty().withMessage('비밀번호가 없습니다.'),
  body('username')
  .notEmpty().withMessage('이름이 없습니다.')
];

exports.loginValidator = [
   body('email')
  .isEmail().withMessage('이메일 형식이 아닙니다.')
  .notEmpty().withMessage('이메일이 없습니다.'),
  body('password')
  .isLength({min: 6}).withMessage('비밀번호가 6자 이하 입니다.')
  .notEmpty().withMessage('비밀번호가 없습니다.')
]

// 게시글 작성

exports.todosValidator = [
   body('title')
  .notEmpty().withMessage('타이틀이 없습니다.')

]
// 특정 게시글 조회 (postId)
exports.getTodosValidator = [
   param('postId').isInt().withMessage("id 가 숫자 여야 함").notEmpty().withMessage('아이디가 없습니다.')
]

exports.putTodosValidator = [
  param('postId').isInt().withMessage("id 가 숫자 여야 함").notEmpty().withMessage('아이디가 없습니다.'),
   body('title')
  .notEmpty().withMessage('타이틀이 없습니다.'),
  body('content')
  .notEmpty().withMessage('컨텐츠가 없습니다.')
]

exports.deleteTodosValidator = [
   body('title')
  .notEmpty().withMessage('타이틀이 없습니다.'),
  body('content')
  .notEmpty().withMessage('컨텐츠가 없습니다.')
]




exports.handleValidation = (req, res, next) => {
  const result = validationResult(req).errors;
    if(result.length !== 0){
    // 입력 오류가 있는 경우
    const extractError = result.map((err => err.msg))
    return next(new Error("InputValidation"));
  }
  next();
};