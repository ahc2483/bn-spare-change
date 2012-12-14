//Application Window Component Constructor
function ApplicationWindow() {

	var self = Ti.UI.createWindow({
		backgroundColor:'#000000'
	});
	
	var alreadySignedUp = Ti.App.Properties.getBool('signed_up', false);
	
	if(!alreadySignedUp){
		var Login = require('ui/views/LoginView');
		var LoginView = new Login();
		var AddCardView;
		var ChooseCharityView;
		
		self.add(LoginView);
		
		Ti.API.addEventListener('LoggedIn', function(e){
			self.remove(LoginView);
			
			var AddCard = require("ui/views/AddCardView");
			AddCardView = new AddCard();
			self.add(AddCardView);
		});
		
		Ti.API.addEventListener('CardAdded', function(e){
			self.remove(AddCardView);
			
			ChooseCharity = require('ui/views/ChooseCharityView');
			ChooseCharityView = new ChooseCharity();
			self.add(ChooseCharityView);
		});
	
	}
	else{
		var Pay;
		var Settings;
		
		//TODO: Load the pay and settings views
	}
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
