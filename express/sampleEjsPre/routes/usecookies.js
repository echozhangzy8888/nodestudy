/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 14:38:22
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 10:47:45
*/

'use strict';

var express = require("express");
var router = express.Router();

router.get("/",function (req,res,next) {
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
    
    res.render("usesession",{title:"使用cookies示例"});

});

module.exports =router;