/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 11:22:46
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-23 18:13:50
*/
//　　1.向UserInfo表中插入一条数据

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

var userAddSql = "insert into userinfo(ID,UserName,UserPass) Values (0,?,?)";
var userAddSql_Params =["wangqi","abcd"];

//增

connection.query(userAddSql,userAddSql_Params,function (err,result) {
    if (err) {
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);   
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');        
});

connection.end();