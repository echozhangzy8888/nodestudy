/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 14:38:22
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 14:38:18
*/

'use strict';

var express = require("express");
var router = express.Router();

router.get("/",function (req,res,next) {

   if (req.cookies.islogin) {
         console.log("使用usecookies-cookies:"+ req.cookies.islogin);
         req.session.islogin = req.cookies.islogin;
   }

   if(req.session.islogin)
         {  
             console.log('usecookies:' + req.session.islogin);
             res.locals.islogin = req.session.islogin;      
         }

   res.render("usecookies",{title:"使用cookies示例"});

});

router.post("/",function (req,res,next) {

    req.session.islogin ="success";
    res.locals.islogin = req.session.islogin;

    res.cookie("islogin","sucess",{maxAge:6000});  //maxAge为过期时长，毫秒为单位，设置一分钟
    
    res.render("usecookies",{title:"使用cookies示例"});

});

module.exports =router;