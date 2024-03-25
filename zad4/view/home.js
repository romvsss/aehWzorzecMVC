const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <p>HOME PAGE</p>
      </body>
    </html>
  `);
});

module.exports = router;