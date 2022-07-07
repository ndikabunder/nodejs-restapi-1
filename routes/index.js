const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function (req, res) {
  res.json({
    message: 'Hai ini kerjaholic x juara coding',
  });
});

module.exports = router;
