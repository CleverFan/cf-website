var express = require('express');
var router = express.Router();
var url = require('../config').url;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vuedemo', function(req, res, next) {
  res.writeHead(302,{
    'Location': url.vuedemo
  });
  res.end();
});


router.get('/githubblog', function(req, res, next) {
  res.writeHead(302,{
    'Location': url.githubblog
  });
  res.end();
});

router.get('/csdnblog', function(req, res, next) {
  res.writeHead(302,{
    'Location':url.csdnblog
  });
  res.end();
});


router.get('/nodejs', function(req, res, next) {
  res.writeHead(302,{
    'Location':url.nodejs
  });
  res.end();
});

router.get('/github', function(req, res, next) {
  res.writeHead(302,{
    'Location':url.github
  });
  res.end();
});

router.get('/upload', function(req, res, next) {
  res.writeHead(302,{
    'Location':url.upload
  });
  res.end();
});

router.get('/hunao', function(req, res, next) {
  res.writeHead(302,{
    'Location':url.hunao
  });
  res.end();
});
module.exports = router;
