/*
* @Author: ZhangZheyi
* @Date:   2016-06-23 14:24:06
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-23 14:32:07
*/
//nodejs 调用带out参数的存储过程，并得到out参数返回值


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

var userProc ="call P_UserInfo(?,?,?,@ExtReturnVal);";
var userProc_Params = [0,'angelbaby','5678'];

//调用存储过程
connection.query(userProc,userProc_Params,function (err, retsult) {
        if(err){
            console.log('[EXEC PROC ERROR] - ',err.message);
            return;
        }        

       console.log('--------------------------PROC----------------------------');
       console.log(retsult);       
       console.log(retsult[0][0].ExtReturnVal);
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();


// 在表中正确插入此数据，而且正确的得到了out参数的值，细心的可能会发现我存储过程中在SET ExtReturnVal = 1表示成功后，多了一句SELECT ExtReturnVal;
// 这样就可以通地查询得到out参数的值了！