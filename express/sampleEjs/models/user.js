/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 14:36:21
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-27 17:13:09
*/

'use strict';

var mysql = require("mysql");
var DB_NAME = "nodesample2";

//创建连接池
var  pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"123456"
});

//监听connection事件
pool.on("connection",function (connection) {
    connection.query("set session auto_increment_increment=1");   //auto_increment_increment控制列中的值的增量值，也就是步长。
});

function User(user) {
    this.username = user.username;
    this.userpass = user.userpass;
}
module.exports = User;

//共享
pool.getConnection(function (err,connection) {

   var useDbSql = "USE " + DB_NAME;  //注意USE后面空格
   connection.query(useDbSql,function (err) {
       if (err) {
            console.log("USE Error:" + err.message);
            return;
       }
       console.log("USE succeed");
   });

   //保存数据
   User.prototype.save = function save(callbacj) {
       // body...
   }

})