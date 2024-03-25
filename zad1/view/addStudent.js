const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ADD-STUDENT</title>
      </head>
      <body>
        <p>ADD STUDENT PAGE</p>
      </body>
    </html>
  `);
});

module.exports = router;