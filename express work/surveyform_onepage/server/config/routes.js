module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	});
	app.post('/results', function(req,res){
		res.json(req.body);
	});
};

