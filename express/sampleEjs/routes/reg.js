/*
 * @Author: ZhangZheyi
 * @Date:   2016-06-27 16:10:30
 * @Last Modified by:   ZhangZheyi
 * @Last Modified time: 2016-06-28 15:27:20
 */

'use strict';

var express = require("express"),
    router = express.Router(),
    User = require("../models/user.js"),
    crypto = require('crypto'),
    TITLE_REG = "注册";

router.get("/", function(req, res, next) {
    res.render("reg", { title: TITLE_REG });
});

router.post("/",function (req, res, next) {
   var userName = req.body["txtUserName"],
       userPwd = req.body["txtUserPwd"],
       userRePwd = req.body["txtUserRePwd"],
       md5 = crypto.createHash("md5");  //创建并返回一个hash对象

       userPwd = md5.update(userPwd).digest("hex");

    var newUser = new User({
          username:userName,
          userpass:userPwd
    });

    //检查用户名是否已经存在
    User.getUserNumByName(newUser.username, function (err, results) {

        console.log("用户名是否存在results： " + results)
        if (results != null && results[0]["num"] > 0) {
            err = "用户名已存在";
        }

        if (err) {
            res.locals.error = err;
            res.render("reg",{ title: TITLE_REG });
            return;
        }
        
        newUser.save(function (err, result) {
            if (err) {
                res.locals.error = err;
                res.render("reg",{ title: TITLE_REG });
                return;
            }

            if (result.insertId > 0) {

                  console.log("保存用户result.insertId： " + result.insertId);
                  console.log(result);
                  res.locals.success ='注册成功，请点击  <a class="btn btn-link" href="/login" role="button"> 登录 </a>';
            }else{
                res.locals.error = err;
            }

             res.render('reg', { title: TITLE_REG });
        });

    });
})


module.exports = router;
