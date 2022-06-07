const express = require("express");
const app = express();
const studentRouter = require('./router/students')
const teacherRouter = require('./router/teacher')
const subjectRouter = require('./router/subject')
const countViewNumber = require('./middleware/view')
const LoggingMiddleWare = require('./middleware/logging_middleware')
const loginMiddleware = require('./middleware/login_middleware')

const bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));

app.use("/student",
LoggingMiddleWare,
loginMiddleware,
countViewNumber,
studentRouter)

app.use("/teacher",
LoggingMiddleWare,
loginMiddleware,
countViewNumber, 
teacherRouter)

app.use("/subject",
LoggingMiddleWare,
loginMiddleware,
countViewNumber,
subjectRouter)

app.use(express.static('assests'))
app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application is running on port 3000");
});