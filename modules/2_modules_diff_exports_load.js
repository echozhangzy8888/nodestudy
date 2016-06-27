/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 17:08:12
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 17:32:22
*/

'use strict';
//调用


// var Counter = require("./2_modules_diff_exports")
// Counter.printNextCount();
// 调用后，执行,在2_modules_diff_exports_load.js文件中输出了isEq的值  ( var isEq = (exports === module.exports); ),返回的true 


//修改后的2_modules_diff_exports_load.js文件源码如下
var Counter = require('./2_modules_diff_exports');
var counterObj = new Counter();
counterObj.printNextCount();



// 调用后，执行,在2_modules_diff_exports_load.js文件中输出了isEq的值  ( var isEq = (exports === module.exports); ),返回的false，这与用先前得到的结果不一致！
// PS：不要用Counter.printNextCount();去访问，你只会得到一个错误的提示