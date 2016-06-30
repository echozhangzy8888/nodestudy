/*
* @Author: ZhangZheyi
* @Date:   2016-06-30 09:42:33
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-30 18:04:00
*/
// http://cnodejs.org/topic/4f16442ccae1f4aa2700104d
'use strict';

var http =require("http"),
    fs= require('fs'),
    path =require('path'),
    string_decoder =require('string_decoder').StringDecoder,
    EventEmitter =require('events').events.EventEmitte,
    util =require('util');

//首先创建一个服务器

http.createServer(function (request, response) {

    //处理文件上传:TODO

}).listen(8080);


//处理文件上传，首先定义一个用于文件上传的类,用于一些初始化设置

function IncomingForm() {

    if (!(this instanceof IncomingForm)) {    // instanceof判断一个变量是否某个对象的实例
      
       return new IncomingForm();
    }

    EventEmitter.call(this);   //使对象可以调用事件函数

    this.maxFiledsSize = 2*1024*1024;//设定最大文件限制

    this.upLoadDir = '/tmp/';  //设定上传文件路径

    this.encoding = "utf-8"; // 设定文件编码

    this.headers =null;  //post数据的头部信息，可以使用request.headers获得

    this.type =null;

    this.bytesReceived = null; //收到的字节数

    this.bytesExpected = null; //预计的字节数，一般只有最终收到的字节数等于预计的字节数，传输才是正确的，否则，传输出错


    this._parser =null; //用于初始化处理post数据的类，等下会定义，类名为multipart_parser.js

    this.filedsSize =0 ;
}