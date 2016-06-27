/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 14:36:21
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 16:39:00
*/
// 　1.连接池的创建，使用createPool方法，options和createConntion一致，可以监听connection事件。

'use strict';
var mysql =require("mysql");

//创建连接池
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"123456",
    port: '3306',                   
    database: 'nodesample'  
});

pool.getConnection(function(err, connection) {

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {    
        console.log(result);
       // connection.release();
    });

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        
        console.log(result);
        connection.release();

    });
});