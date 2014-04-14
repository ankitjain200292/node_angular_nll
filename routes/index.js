
/*
 * GET home page.
 */

var AreaGuide  = require('../models/areaguide');

exports.areaguide = function(req, res) {
	AreaGuide.find({},function(err, records){
		 res.json(records);
});
  };