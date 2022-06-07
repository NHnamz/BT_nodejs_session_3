const express = require("express");
const subjectRouter = express.Router();

const subject = [
    {
        id: 1,
        name: 'Toan',
    },
    {
        id: 2,
        name: 'Van',
    },
    {
        id: 3,
        name: 'Anh',
    },
];

subjectRouter.get("", (req, res, next) => {
  console.log("Successfully access to subject router");
  res.json(subject);
  next();
});

module.exports = subjectRouter