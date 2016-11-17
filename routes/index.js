var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vuedemo', function(req, res, next) {
  res.writeHead(302,{
    'Location':'http://www.improvecfan.cn:8089'
  });
  res.end();
});


router.get('/githubblog', function(req, res, next) {
  res.writeHead(302,{
    'Location':'http://blog.improvecfan.cn'
  });
  res.end();
});

router.get('/csdnblog', function(req, res, next) {
  res.writeHead(302,{
    'Location':'http://blog.csdn.net/qq_31655965'
  });
  res.end();
});

router.get('/github', function(req, res, next) {
  res.writeHead(302,{
    'Location':'https://github.com/CleverFan'
  });
  res.end();
});

router.get('/hunao', function(req, res, next) {
  res.writeHead(302,{
    'Location':'http://www.improvecfan.cn:3000'
  });
  res.end();
});
module.exports = router;
