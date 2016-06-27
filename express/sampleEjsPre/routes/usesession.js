/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 14:32:34
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 11:02:15
*/
// 　官方示例：https://github.com/visionmedia/express/blob/master/examples/session/index.js

'use strict';

var express = require("express");
var router = express.Router();

router.get("/",function (req,res,next) {

     if(req.session.islogin)
         {
              console.log('使用usesession:' + req.session.islogin);
              res.locals.islogin = req.session.islogin;      
         }
   
     res.render("usesession",{title:"使用session示例"});
});

router.post("/",function (req,res,next) {

    req.session.islogin ="success";
    res.locals.islogin = req.session.islogin;

    res.render("usesession",{title:"使用session示例"});

});



module.exports =router;