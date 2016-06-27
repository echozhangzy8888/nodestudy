/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 09:50:30
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-24 10:44:39
*/


/*
 escape() 　防止SQL注入
 使用pool.escape()和connect.escape()
 */

'use strict';

var  mysql = require("mysql");

var pool = mysql.createPool({
     host: "localhost",
     user: "root",
     password:"123456",
     port: '3306',                   
     database: 'nodesample'  
});

pool.getConnection(function (err,connection) {
    connection.query("select * from userinfo where id =" + "10 or id =11",function (err,result) {
        console.log(err);
        console.log(result);
        connection.release();
    });

    connection.query("select * from userinfo where id=" +pool.escape("10 or id = 11"),function (err,result) {
         console.log(err);
         console.log(result);
        //connection.release();
    })
})

/*
第1个query拼接条件可以被执行，而通过escape方法转义后的忽略了后面的拼接的部分！
其他：
mysql.escapeId(identifier)
mysql.format
 */