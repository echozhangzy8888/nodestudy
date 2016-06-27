/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 09:26:34
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-24 09:42:19
*/

// 断线重连
// 数据库可以因为各种原因导致连接不上，这种就必须有重连接机制！
// 主要判断errorcode:PROTOCOL_CONNECTION_LOST 


'use strict';

var mysql= require("mysql");
var db_config={
     host: "localhost",
     user: "root",
     password:"123456",
     port: '3306',                   
     database: 'nodesample'  
}

var connection;
function handleDisConnect() {
    connection =mysql.createConnection(db_config);
    connection.connect(function (err) {
        if (err) {
            console.log("进行断线重连:"+ new Date());
            setTimeout(handleDisConnect,2000);   //2秒重连一次
            return;
        }
        console.log("连接成功");
    });

    connection.on("error",function (err) {
       console.log("db error",err);
       if (err.code === "PROTOCL_CONNECTION_LOST") {
             handleDisConnect();
       }else{
             throw err;
       }
    });
}

handleDisConnect();

/*
　1.首先去数据库服务器停止MySQL服务
　2.运行断线重连代码
  3.去数据为服务器，开启mysql服务器，再看看执行结果
  当数据库服务器mysql服务重新启动后，执行结果输出连接成功，不再输出断线重连日志^_^!
 */
