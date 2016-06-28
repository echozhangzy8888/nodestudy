/*
* @Author: ZhangZheyi
* @Date:   2016-06-27 16:10:38
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-28 18:03:14
*/

'use strict';

var express = require("express"),
    router = express.Router(),
    User = require("../models/user.js"),
    crypto = require('crypto'),
    TITLE_LOGIN = "登陆";

router.get("/", function(req, res, next) {
    res.render("login", { title: TITLE_LOGIN });
});

router.post("/", function (req,res, next) {
    var userName = req.body["txtUserName"],
        userPwd = req.body["txtUserPwd"],
        isRem = req.body["chbRem"],
        md5 = crypto.createHash("md5");
        console.log("用户名"+userName);
        console.log("密码"+userPwd);

    //据用户名得到用户信息
    User.getUserByUserName(userName,function (err,results) {

        if (results == "") {

            res.locals.error = "用户不存在";
            res.render("login",{ title: TITLE_LOGIN });
            return;
        }
      
        userPwd = md5.update(userPwd).digest("hex");
        
        console.log("md5密码是："+ userPwd);
        if (results[0].UserName != userName || results[0].UserPass != userPwd ) {

             console.log("配对错误："+userName);
             console.log("配对错误密码："+userPwd);

             res.locals.error = "用户名或密码错误";
             res.render("login",{ title: TITLE_LOGIN });
             console.log(1);
             return;
        }else{

            console.log("配对成功："+userName)
            if(isRem){
                res.cookie("islogin", userName, {maxAge:6000});
            }

            res.locals.username = userName;
            req.session.username = res.locals.userName;
            console.log(req.session.userName);
            res.redirect("/");
            return;

        }
        
    });
})

module.exports = router;