/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 15:40:35
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 16:28:26
*/

// 创建一个自定义模块 （以一个计数器为例）
'use strict';

var outputVal =0; //输出值
var increment =1; //增量

/* 设置输出值 */
function setOutputVal(val) {
   outputVal = val;
}

/* 设置增量 */
function setIncrement(incrementVal) {
    increment = incrementVal;
}

/* 输出 */
function printNextCount() {
   outputVal += increment;
   console.log(outputVal);
}

function printOutputVal() {
   console.log(outputVal);
}

exports.setOutputVal = setOutputVal;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;

//示例中重点在于exports和module.exports;提供了外部访问的接口，下面调用一下看看效果吧