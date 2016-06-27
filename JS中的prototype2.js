/*
* @Author: ZhangZheyi
* @Date:   2016-06-27 18:02:06
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 18:03:08
*/

'use strict';

function baseClass()
{
    this.showMsg = function()
    {
        console.log("baseClass::showMsg");   
    }
   
    this.baseShowMsg = function()
    {
        console.log("baseClass::baseShowMsg");
    }
}
baseClass.showMsg = function()
{
    console.log("baseClass::showMsg static");
}

function extendClass()
{
    this.showMsg =function ()
    {
        console.log("extendClass::showMsg");
    }
}
extendClass.showMsg = function()
{
    console.log("extendClass::showMsg static")
}

extendClass.prototype = new baseClass();
var instance = new extendClass();

instance.showMsg(); //显示extendClass::showMsg
instance.baseShowMsg(); //显示baseClass::baseShowMsg
instance.showMsg(); //显示extendClass::showMsg

baseClass.showMsg.call(instance);//显示baseClass::showMsg static

var baseinstance = new baseClass();
baseinstance.showMsg.call(instance);//显示baseClass::showMsg
