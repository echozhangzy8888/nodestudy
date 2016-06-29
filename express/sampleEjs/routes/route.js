/*
* @Author: ZhangZheyi
* @Date:   2016-06-29 14:03:47
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-29 15:02:58
*/

'use strict';

var index = require('./index');
var reg = require("./reg");
var login =require("./login");
var logout = require("./logout");
var formidable = require("./formidable");  

function routeStart(app) {
    app.use('/', index);
    app.use("/reg", reg);
    app.use("/login",login);
    app.use("/logout",logout);
    app.use("/formidable",formidable)
}

module.exports.start = routeStart;