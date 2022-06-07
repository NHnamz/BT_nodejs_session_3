const countObject = [
    {
        user: "alice", 
        student: 0, 
        teacher: 0, 
        subject: 0 
    },
    { 
        user: "bob", 
        student: 0, 
        teacher: 0, 
        subject: 0 
    },
    { 
        user: "charlie", 
        student: 0, 
        teacher: 0, 
        subject: 0 
    },
  ];
  
  function countViewNumber(req, res) {
    countObject.forEach((element) => {
      if (element.user === req.body.username && req.baseUrl === "/students"
      ) {
        element.student++;
      } else if (
        element.user === req.body.username && req.baseUrl === "/teachers"
      ) {
        element.teacher++;
      } else if (
        element.user === req.body.username && req.baseUrl === "/subjects"
      ) {
        element.subject++;
      }
    });
    console.log(countObject);
  }
  
  module.exports = countViewNumber;