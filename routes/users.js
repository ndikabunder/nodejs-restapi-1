const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(process.env.APP_NAME);
});

router.get('/me', (req, res) => {
  res.send('Hello this is me');
});

module.exports = router;
