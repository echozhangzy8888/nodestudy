/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 14:36:21
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-28 15:38:48
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
   User.prototype.save = function save (callback) {
        var user ={
             username:this.username,
             userpass:this.userpass
        };

        var insertUser_Sql ="insert into userinfo(id,username,userpass) values(0,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpass], function (err,result) {
            if (err) {
                 console.log("insertUser_Sql Error: " + err.message);
                 return;
            }

            // connection.release();

             console.log("invoked[save]");
             callback(err,result);
        });
   };

   //根据用户名得到用户数量
   User.getUserNumByName = function getUserNumByName(username, callback) {
       var getUserNumByName_Sql = "select count(1) as num from userinfo where username = ?";  

       connection.query(getUserNumByName_Sql, [username], function (err, result) {
           if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
           }

          // connection.release();

           console.log("invoked[getUserNumByName]");
           callback(err,result);
       });
   };

   //根据用户名得到用户信息
   User.getUserByUserName = function  getUserByUserName(username, callback) {
       var getUserByUserName_Sql = "select * from userinfo where username = ?";

       connection.query(getUserByUserName_Sql, [username], function (err, result) {
           if (err) {
                 console.log("getUserByUserName Error: " + err.message);
                 return;
           }

            connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err,result);
       });
   };
   
});
