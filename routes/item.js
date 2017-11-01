var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var con=mysql.createPool({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"item"
})
/* GET home page. */
router.post('/list', function(req, res, next) {
 	var sum=req.body.val
 	con.query(`SELECT * FROM baobao WHERE name LIKE '%${sum}%' OR detail LIKE '%${sum}%'`,function(err,rows,fields){
 		res.header('Access-Control-Allow-Origin', "*")
 		res.send(rows)
 	})
});

module.exports = router;
