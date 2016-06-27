var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
     res.clearCookie('remember');
     res.redirect('back');
});



module.exports = router;
