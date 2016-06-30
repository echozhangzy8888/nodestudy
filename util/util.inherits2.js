/*
* @Author: ZhangZheyi
* @Date:   2016-06-30 10:59:06
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-30 18:01:09
*/

//ctor继承superCtor.prototype的方法
//util.inherits(ctor, superCtor);

'use strict';

var util =require('util');
var EventEmitter =require("events").EventEmitter;  //EventEmitter 的核心是事件发射与事件监听器

function Person() {
    // 调用superCtor的call方法
    EventEmitter.call(this);
}

// 使用util工具包的inherits实现继承
util.inherits(Person, EventEmitter);

Person.prototype.getName =function () {
    return this.name;
}

Person.prototype.setName = function (name) {
   // this.name = name;
    this.emit("nameEvent", name)
}

Person.prototype.sendData = function (data) {
    this.emit("data", data)
}

//如何使用
var person = new Person();

console.log(person instanceof EventEmitter); //instanceof判断一个变量是否某个对象的实例
console.log(Person.super_ === EventEmitter);
 //console.log(Person);
// console.log(EventEmitter);
// 
person.on('data',function(data){
    console.log(data);
})
person.sendData('It works!');


person.on('nameEvent',function(name){
    console.log(name);
})
person.setName('Alice');