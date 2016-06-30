/*
* @Author: ZhangZheyi
* @Date:   2016-06-30 10:59:06
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-30 13:52:56
*/

//ctor继承superCtor.prototype的方法
//util.inherits(ctor, superCtor);

'use strict';

var util =require('util');

function Base() {
    this.name= "base";
    this.base = 1991;
     //对象方法
    this.sayHello =function () {
       console.log("hello " + this.name);
    };
}

//类方法
Base.test =function () {
     console.log(this.name+"类方法");
}

//原型方法
Base.prototype.showName = function () {
   console.log(this.name);
};

function Sub() {
    this.name = "sub";
}

util.inherits(Sub, Base);

Base.test()   //类方法

var objBase = new Base();
objBase.showName();
objBase.sayHello();

console.log(objBase);

var objSub = new Sub();
objSub.showName();

console.log(objSub);

// 注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。


