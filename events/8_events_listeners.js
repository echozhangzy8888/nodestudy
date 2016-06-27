/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 14:19:42
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 15:28:11
*/

'use strict';

var EventEmitter =require("events").EventEmitter;
var ee = new EventEmitter();

var listener =function (foo,bar) {
     console.log("第1个监听事件，参数foo=" +foo+ ",bar=" +bar);
}

var listener2 =function (foo,bar) {
     console.log("第2个监听事件，参数foo=" +foo+ ",bar=" +bar);
}

ee.on("some_events",listener);
ee.on("some_events",listener2);
ee.on("other_events",function (foo,bar) {
    console.log("其他监听事件，参数foo=" +foo+ ",bar=" +bar);
});

/*
   EventEmitter.listeners(event)   //返回指定事件监听数组
   参数1：event 字符串 ，事件名
 */

var listenerEventsArr = ee.listeners("some_events");
console.log(listenerEventsArr.length)

for(var i= listenerEventsArr.length -1;i>=0; i--){
    console.log(listenerEventsArr[i]);
}

// for(var i= 0;i<listenerEventsArr.length; i++){
//     console.log(listenerEventsArr[i]);
// }


// 给some_events注册两个监听，调用emitter.listeners函数，传入some_events事件名，接收函数返回值；
// 从结果可以看出，返回值接收到some_events所有注册监听的集合！