/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 16:45:25
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 17:29:50
*/

'use strict';

// http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
// http://zihua.li/2012/03/use-module-exports-or-exports-in-node/

// var counter =0;

// exports.printNextCount =function () {
//     counter += 2;
//     console.log(counter);
// }

// var isEq =(exports === module.exports);
// console.log(isEq)


//修改后的2_modules_diff_exports.js源码如下
var counter  = 0;     

module.exports = function(){    
    counter += 10;
    this.printNextCount = function()
    {
        console.log(counter);    
    }
}

var isEq = (exports === module.exports);

console.log(isEq);