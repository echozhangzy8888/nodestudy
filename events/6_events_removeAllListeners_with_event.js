/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 13:29:56
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 13:40:01
*/

'use strict';

var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();

var listener  = function (foo,bar) {
    console.log("第1个监听事件，参数foo=" +foo+ ",bar="+bar);
}

var listener2  = function (foo,bar) {
    console.log("第2个监听事件，参数foo=" +foo+ ",bar="+bar);
}

ee.on("some_events",listener);
ee.on("some_events",listener2);

ee.on("other_events",function (foo,bar) {
    console.log("其他监听事件，参数foo=" +foo+ ",bar="+bar);
});

/*
    EventEmitter.removeAllListeners([event])  移除（指定事件）所有监听
    参数1:可选参数，event 字符串，事件名
 */

ee.removeAllListeners("some_events");
ee.emit("some_events","Wilson","Zhong")
ee.emit("other_events","WilsonOther","ZhongOther");

// 看看上面的执行结果，你会发现给some_events注册了两个监听；给other_events注册了一个监听；我调用emitter.removeAllListeners传了some_events事件名；
// 最后使用emitter.on函数触发some_events和other_events两个事件，最后发现some_events注册的两个监听都不存在，而other_events注册的监听还存在；
// 这表示当 emitter.removeAllListeners传用事件名作为参数时，为移除传入事件名的所有监听，而不会影响其它事件监听！

