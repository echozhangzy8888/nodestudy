/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 14:36:21
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 17:13:39
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

//监听connection事件

pool.on("connection",function (connection) {
   // connection.query('SET SESSION auto_increment_increment=1');   //www.tuicool.com/articles/eAZJzm
})

// //直接使用
// pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// //共享
// pool.getConnection(function(err, connection) {
//   // connected! (unless `err` is set)
// });