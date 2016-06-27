var express = require('express');
var router = express.Router();

// 通过get请求/时，响应后面的function处理
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '<h1>Express</h1>'
                        ,users:[{username:"Wilson"},
                                {username:"Wilson Zhong"},
                                {username:"Zhong Wei"}]
   });
});

module.exports = router;
