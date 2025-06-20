const express = require("express");
const userRouter = require("./routers/users.router.js");
const todoRouter = require('./routers/todos.router.js')
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken')
const errorHandlingMiddleware = require('./middleware/error-handling-middleware')

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", [userRouter, todoRouter]);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});