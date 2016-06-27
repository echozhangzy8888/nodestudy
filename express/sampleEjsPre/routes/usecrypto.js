/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 14:42:04
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 09:32:01
*/

'use strict';

var express = require("express");
var router = express.Router();
var crypto =require("crypto");


router.get("/",function (req,res,next) {
    res.render("usecrypto",{title:"加密字符串示例"})
});

router.post("/",function (req,res,next) {
     var userName = req.body.txtUserName,
         userPwd = req.body.txtUserPwd;

     //生成口令的散列值
     var md5 = crypto.createHash("md5");   //crypto模块功能是加密并生成各种散列
     var en_upwd =md5.update(userPwd).digest("hex");   //hash.update(data[, input_encoding])  //hash.digest([encoding])
     
     console.log('加密前的密码:'+userPwd);
     console.log("加密后的密码："+ en_upwd);

     res.render("usecrypto",{title:"加密字符串示例"})
});

module.exports = router;

/*
用到了createHash(algorithm)方法 ,这是利用给定的算法生成hash对象 
update(data, [input_encoding])方法，可以通过指定的input_encoding和传入的data数据更新hash对象，input_encoding为可选参数，没有传入则作为buffer处理 （input_encoding可为'utf-8'、'ascii'等）
digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，不传则返回buffer (encoding可为 'hex'、'base64'等)；当调用digest方法后hash对象将不可用；
 */


