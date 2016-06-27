/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 10:35:52
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 11:20:37
*/

'use strict';

// events是node.js 最重要的模块，events模块只提供了一个对象events.EventEmitter，EventEmitter 的核心是事件发射与事件监听器。
// EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。 　


/*
    调用 events模块，获取 events.EventEmitter对象
 */
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();


/*
    EventEmitter.on(event,listener)为事件注册一个监听
    参数1：event 字符串，事件名
    参数2：回调函数
 */
ee.on("some_events",function (foo,bar) {
    console.log("第1个监听事件，参数foo=" + foo +  ",bar =" +bar);
});


console.log("第一轮");
ee.emit("some_events","Wilson","Zhong");

console.log("第二轮");
ee.emit("some_events","Wilson","Z");






