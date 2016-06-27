/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 13:45:38
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 14:08:39
*/

'use strict';

var EventEmitter =require("events").EventEmitter;
var ee = new EventEmitter();

var listener =function (foo,bar) {
   console.log("第1个监听事件，参数foo=" +foo+ ",bar=" +bar);
}

var listener2 =function (foo,bar) {
    console.log("第1个监听事件，参数foo=" +foo+ ",bar=" +bar);
}

ee.on("some_events",listener);
ee.on("some_events",listener2);
ee.on("other_events",function (foo,bar) {
    console.log("其他监听事件，参数foo=" +foo+ ",bar="+bar);
})


/*
    EventEmitter.removeAllListeners([event])   移除（批定事件）所有监听器
    参数1：可选参数，event  字符串，事件名
*/

ee.removeAllListeners();
ee.emit("some_events","Wilson","Zhong");
ee.emit("other_events","Wilson","Zhong");

// 示例代码和传入参数时几乎一样，只是在调用emitter.removeAllListeners并没有传入指定事件名；
// 运行结果会发现some_events和other_events所有监听都不存在了，它会移除所有监听！（比较暴力的方法一般要慎用~~）
