const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Add Student</title>
        </head>
        <body>
          <form action="/student" method="post">
            <label>
                Imie: 
            </label>
            <input type="text" id="imie" name="imie">
            <label>
                Nazwisko: 
            </label>
            <input type="text" id="nazwisko" name="nazwisko">
            <label>
                Kierunek: 
            </label>
            <input type="text" id="kierunek" name="kierunek">
            <button type="submit">
                Add Student
            </button>
          </form>
        </body>
      </html>
    `);
});

module.exports = router;