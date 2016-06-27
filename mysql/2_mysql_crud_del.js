/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 11:22:46
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-23 13:51:35
*/
//删除

'use strict';

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"123456",
    port: "3306",
    database:"nodesample"
});

connection.connect();
console.log("connect OK");

var userDelSql = "Delete from userinfo";


//删

connection.query(userDelSql,function (err,result) {
    if (err) {
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
     console.log('--------------------------DELETE----------------------------');
     console.log('DELETE affectedRows',result.affectedRows);
     console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();