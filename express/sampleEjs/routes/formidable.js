/*
* @Author: ZhangZheyi
* @Date:   2016-06-29 14:44:41
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-29 15:54:21
*/

'use strict';

var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var fs = require("fs");
var AVATAR_UPLOAD_FOLDER = '/avatar/';

router.get('/', function(req, res, next) { 

  if(req.cookies.islogin)
  { 
    req.session.username = req.cookies.islogin;
  }  

  if(req.session.username)
  {    
    res.locals.username = req.session.username;      
  }else{
    res.redirect('/login');
    return;    
  }

  res.render('formidable', { title: "formidable上传示例" });
});

router.post("/",function (req, res, next) {
    // body...
})

module.exports = router;