/*
* @Author: ZhangZheyi
* @Date:   2016-06-28 13:13:42
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-28 13:36:27
*/

'use strict';

String.prototype.format = function (args) {
    if (arguments.length>0) {
        var result = this;
        console.log(this)
        if (arguments.length ==1 && typeof(args)=="object") {
            for(var key in args){
                var reg = new RegExp ("({"+key+"})","g");
                result = result.replace(reg,args[key]);
            }
        }else{
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i]==undefined) {
                    return "";
                }else{
                    var reg = new RegExp("({["+i+"]})","g");
                    result= result.replace(reg,arguments[i]);
                }
            }
        }
        return result;
    }else{
        return this;
    }
}

//两种调用
var template1 = "我是{0},今年{1}了";
var result1 = template1.format("Jerry",22)
console.log(result1);

var template2 = "我是{name},今年{age}了"
var result2 = template2.format({name:"Linda",age:22});
console.log(result2)