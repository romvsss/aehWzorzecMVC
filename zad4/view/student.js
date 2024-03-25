const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { imie, nazwisko, kierunek } = req.body;
    students.push({ imie, nazwisko, kierunek });
    res.send(`
      <html>
        <head>
          <title>Student</title>
        </head>
        <body>
          <p>Hello, ${imie} ${nazwisko} on ${kierunek} studies!</p>
        </body>
      </html>
    `);
});

module.exports = router;