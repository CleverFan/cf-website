var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vuedemo', function(req, res, next) {
  res.writeHead(302,{
    'Location':'www.improvecfan.cn:8089'
  });
  res.end();
});


router.get('/blog', function(req, res, next) {
  res.writeHead(302,{
    'Location':'http://blog.improvecfan.cn'
  });
  res.end();
});

module.exports = router;
