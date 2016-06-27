/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 14:38:22
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-24 16:53:33
*/

'use strict';

var express = require("express");
var router = express.Router();

router.get("/",function (req,res,next) {
   res.render("usecookies",{title:"使用cookies示例"});
});

module.exports =router;