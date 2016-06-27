/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 13:17:49
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-23 18:14:37
*/
//更新1操作中插入的数据信息


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

var userModSql ="update userinfo set username =?,userpass=? where id =?"
var userModSql_Params =["wangqi2","5678",13];

//改
connection.query(userModSql,userModSql_Params,function (err,result) {
    if (err) {
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
     console.log('--------------------------UPDATE----------------------------');
     console.log('UPDATE affectedRows',result.affectedRows);
     console.log('-----------------------------------------------------------------\n\n');
});

connection.end();

