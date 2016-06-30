/*
* @Author: ZhangZheyi
* @Date:   2016-06-30 13:52:28
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-30 17:22:30
*/


/*
util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
http://www.runoob.com/nodejs/nodejs-util.html
*/

'use strict';

var util = require('util');
function Person() {
    this.name= "byvoid";
    this.toString = function () {
        return this.name;
    };

}

var obj = new Person();
console.log(obj);
// console.log(util.inspect(obj));
console.log(util.inspect(obj,true));