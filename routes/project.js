
exports.viewProject = function(req, res) { 
	console.log("IS THERE ANYTHING SHOWING UP??")
	var name = req.params.name; 
	console.log("The project name is: " + name);
	res.render('project', {
		'projectName': name
	});
}