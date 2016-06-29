/*
* @Author: ZhangZheyi
* @Date:   2016-06-27 16:10:46
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-29 10:54:47
*/

'use strict';

var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
     req.session.destroy();
     res.redirect('/login');
});

module.exports =router;