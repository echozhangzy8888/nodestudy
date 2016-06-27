/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 13:17:49
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-23 13:47:47
*/
//查询


'use strict';

var mysql = require("mysql");

var connection =mysql.createConnection({
     host: "localhost",
     user: "root",
     password:"123456",
     port: "3306",
     database:"nodesample"
});

connection.connect();
console.log("connection ok")

var userGetSql ="select * from userinfo";


//查
connection.query(userGetSql,function (err,result) {
    if (err) {
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
       console.log('--------------------------SELECT----------------------------');
       console.log(result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();


//从查询出来的结果可以看出，result返回了一个JSON格式的数据，同时表示第二步中更新是成功!
