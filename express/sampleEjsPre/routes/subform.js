/*
* @Author: ZhangZheyi
* @Date:   2016-06-24 14:27:50
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-24 17:38:31
*/

'use strict';

var  express = require("express");
var  router = express.Router();

// router.get("/",function (req, res, next) {
//    var userName = req.query.txtUserName,
//        userPwd = req.query.txtUserPwd,
//        userName2 = req.param("txtUserName"),
//        userPwd2 = req.param("txtUserPwd");

//        console.log("req.query用户名："+ userName);
//        console.log('req.query密码:'+userPwd);
//        console.log('req.param用户名:'+userName2);
//        console.log('req.param密码:'+userPwd2);

//    res.render("subform",{title:"提交表单及接收参数示例"});
// });



router.get('/',function(req,res){
 
  res.render('subform',{title:'提交表单篇'});
 
});

router.post("/",function (req, res, next) {
   var userName = req.body.txtUserName,
       userPwd = req.body.txtUserPwd,
       userName2 = req.param("txtUserName"),
       userPwd2 = req.param("txtUserPwd");

       console.log("req.body用户名："+ userName);
       console.log('req.body密码:'+userPwd);
       console.log('req.param用户名:'+userName2);
       console.log('req.param密码:'+userPwd2);
});

module.exports = router;
