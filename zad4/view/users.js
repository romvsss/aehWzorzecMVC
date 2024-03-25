const express = require('express');
const router = express.Router();

const students = require('./app').students;

router.get('/', (req, res) => {
    const userList = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.course}</p>`).join('');
    res.send(`
      <html>
        <head>
          <title>Users</title>
        </head>
        <body>
        <ul>
          ${userList}
        </ul>
        </body>
      </html>
    `);
  });

module.exports = router;