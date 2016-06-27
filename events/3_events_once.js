/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 11:22:18
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 12:05:29
*/

'use strict';



var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();


/*
   EventEmitter.once(event,listener)  为事件注册一次性监听，触发一次后移除监听
   参数1：event  字符串，事件名
   参数2：回调函数
 */

ee.once("some_events",function (foo,bar) {
    console.log("第1个监听事件，参数foo=" + foo + ",bar=" +bar);
});

console.log("第一轮");
ee.emit("some_events","Wilson","Zhong");

console.log("第二轮");
var isSuccess = ee.emit ("some_events","Wilson2" ,"Zhong2");
console.log(isSuccess);

// 从上面示例代码执行结果可以看出，用emitter.once给some_events注册一个监听后，分两轮调用emitter.emit触发，第二轮会返回false；这表示用emitter.once注册监听和用前面讲的emitter.on注册监听略有不同，
// emitter.once注册监听是一次性监听，当触发一次后，会移除该监听！当然，从名字上就看就比较明显了^_^!