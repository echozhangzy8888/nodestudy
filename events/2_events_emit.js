/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 10:35:52
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 11:19:51
*/

'use strict';

var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.on("some_events",function (foo,bar) {
    console.log("第1个监听事件，参数foo=" + foo +  ",bar =" +bar);
});

/*
     EventEmitter.emit(event,[arg1],[arg2],[...])  触发指定事件
     参数1：event  字符串，事件名
     参数2：可选参数，按顺序传入回调函数的参数
     返回值：该事件是否有监听
 */

var isSuccess = ee.emit("some_events","Wilson1","Zhong1");

ee.on("some_events",function (foo,bar) {
    console.log("第2个监听事件，参数foo=" + foo + ",bar=" +bar);
})

ee.emit("some_events","2echozhang","2steven");

var isSuccess2 = ee.emit("other_events","otherWilson","Zhong");

console.log(isSuccess);
console.log(isSuccess2);


//示例进行了三次触发事件操作，其中some_events注册了监听，调用时emit函数会返回一个true,而other_events并没有注册监听，emit函数会返回一个false，表示该事件没有监听；当然也可以不用管这个返回值！





