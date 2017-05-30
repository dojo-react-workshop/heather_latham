module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	});
	app.post('/results', function(req,res){
		if (req.body.name === ''){
			res.status(400);
			res.json(false);
		}
		res.json(req.body);
	});
};

