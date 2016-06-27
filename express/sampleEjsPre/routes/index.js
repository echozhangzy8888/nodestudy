var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', function(req, res, next) {


     // if (req.cookies.remember) {

     //    res.send('Remembered :). Click to <a href="/forget">forget</a>!.');

     // } else {

     //      res.send('<form method="post"><p>Check to <label>'
     //      + '<input type="checkbox" name="remember"/> remember me</label> '
     //      + '<input type="submit" value="Submit"/>.</p></form>');
     // }
     
     
      if (req.cookies.remember) {
         console.log("后台打印cookies.remember是:"+ req.cookies.remember);
         req.session.remember = req.cookies.remember;
      }

      res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
     var minute = 60000;
      req.session.remember = 1;   //这里是个变量
      res.locals.remember =  req.session.remember;

     if (req.body.remember) res.cookie('remember', 1, { maxAge: minute });
     //res.redirect('back');
     res.render("index",{title:"Express"});
     
});



module.exports = router;
