/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 13:14:06
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 13:25:07
*/

'use strict';

var EventEmitter =require("events").EventEmitter;
var ee = new EventEmitter();

var listener = function (foo,bar) {
   console.log("第1个监听事件，参数foo=" + foo + ",bar="+bar);
}

var listener2 =function (foo,bar) {
   console.log("第2个监听事件，参数foo=" + foo + ",bar="+bar);
}

var listener3 = function (foo,bar) {
    console.log("第3个监听事件，参数foo=" + foo + ",bar="+bar);
}

ee.on("some_events",listener);
ee.on("some_events",listener2);
ee.on("some_events",listener3);

/*
    EventEmitter.removeListener(event,listener)  移除指定事件的监听器
    注意：该监听器必须是注册过的
    ps：失败很大原因就是忽略了监听器，理所当然的认为传个事件名就OK了，所以就悲剧了!
 */

ee.removeListener("some_events", listener);
ee.removeListener("some_events", listener3);
ee.emit("some_events","Wilson","Zhong");

// 例中写法，给some_events添加了三个监听，又移除了第一个和第三个监听，最后再用emitter.emit触发some_events，输出结果不难发现，用emitter.removeListener移除的第一个和第三个监听都没有再起作用，
// 想当然是害人地，原来emitter.removeListener的第二个参数是要移除的监听，而非移除成功后的回调函数……^_^!