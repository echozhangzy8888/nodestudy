/*
* @Author: ZhangZheyi
* @Date:   2016-06-27 17:21:01
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 18:00:11
*/

'use strict';

/* javascript的方法可以分为三类：
 a 类方法
 b 对象方法
 c 原型方法
*/

function  People(name) {
    this.name = name;
    //对象方法
    this.Introduce = function () {
       console.log("My name is " +  this.name);
    }
}

//类方法
People.Run = function () {
   console.log("I can run");
}

//原型方法
People.prototype.IntroduceChine = function () {
    console.log("我的名字是" + this.name);
}

//测试
var p1 = new People("zhangzheyi");

p1.Introduce();

People.Run();

p1.IntroduceChine();

/*
 baseClass类，然后我们要定义extentClass，但是我们打算以baseClass的一个实例为原型，来克隆的extendClass也同时包含showMsg这个对象方法
 extendClass.prototype = new baseClass()就可以阅读为：extendClass是以baseClass的一个实例为原型克隆创建的。
实验的例子1:
 */

function baseClass() {
    this.showMsg =function () {
       console.log("baseClass::showMsg")
    }
}

function extendClass() {
    
}

extendClass.prototype = new baseClass();
var instance = new extendClass();
instance.showMsg();

/*
有一个问题，如果extendClass中本身包含有一个与baseClass的方法同名的方法会怎么样?
扩展实验2:
 */

function extendClass2() {
    this.showMsg =function () {
        console.log("extendClass2::showMsg")
    }
}

extendClass2.prototype = new baseClass();
var instance2 = new extendClass2();
instance2.showMsg();  //显示extendClass2::showMsg

// 扩展实验2证明：函数运行时会先去本体的函数中去找，如果找到则运行，找不到则去prototype中寻找函数。或者可以理解为prototype不会克隆同名函数。

/*
 有一个新的问题：使用extendClass的一个实例instance调用baseClass的对象方法showMsg怎么办？
 答案是可以使用call: 
 */

var baseinstance  = new baseClass();
baseinstance.showMsg.call(instance2);  //显示baseClass::showMsg

// 这里的baseinstance.showMsg.call(instance);阅读为“将instance当做baseinstance来调用，调用它的对象方法showMsg”
// 好了，这里可能有人会问，为什么不用baseClass.showMsg.call(instance);
// 这就是对象方法和类方法的区别，我们想调用的是baseClass的对象方法


