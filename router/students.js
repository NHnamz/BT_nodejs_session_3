const express = require("express");
const studentRouter = express.Router();

const students = [
  {
    id: 1,
    name: 'Tai',
    age: 14
},
{
    id: 2,
    name: 'Minh',
    age: 14
},
{
    id: 3,
    name: 'Nghia',
    age: 15
},
];

studentRouter.get("", (req, res, next) => {
  console.log("Successfully access to students router");
  res.json(students);
  next();
});

module.exports = studentRouter