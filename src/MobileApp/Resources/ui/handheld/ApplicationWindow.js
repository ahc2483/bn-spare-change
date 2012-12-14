//Application Window Component Constructor
function ApplicationWindow() {
	var Login = require('ui/common/Login');
	var self = Ti.UI.createWindow({
		backgroundColor:'#000000'
	});
	
	var login = new Login();
	self.add(login);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
