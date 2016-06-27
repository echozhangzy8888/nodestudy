/*
 * @Author: ZhangZheyi
 * @Date:   2016-06-22 17:45:49
 * @Last Modified by:   ZhangZheyi
 * @Last Modified time: 2016-06-23 13:06:37
 */
// http://jingyan.baidu.com/article/f3ad7d0ffc061a09c3345bf0.html 安装
// https://www.npmjs.com/package/mysql#install  实例操作
// https://www.mysql.com/products/workbench/  mysql工具
// 测试MySQL

'use strict';

var mysql = require('mysql'); //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',              //MySQL认证用户名
    password: '123456',      //MySQL认证用户密码
    port: '3306',            //端口号
    //database: 'my_db'
});

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;

//     console.log('The solution is: ', rows[0].solution);
// });

// connection.end();


connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  

//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) { 
     if (err) {
             console.log('[query] - :'+err);
        return;
     }
     console.log('The solution is: ', rows[0].solution);  
}); 
 
//关闭connection
connection.end(function(err){
    if(err){        
        return;
    }
      console.log('[connection end] succeed!');
});
