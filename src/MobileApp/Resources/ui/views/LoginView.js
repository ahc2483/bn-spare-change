function Login() {
	var self = Ti.UI.createView();
	
	Ti.Facebook.appid = SpareChange.Settings.FacebookAppId;
	Ti.Facebook.permissions = SpareChange.Settings.FacebookPermissions;
	
	Ti.Facebook.addEventListener('login', function(e) {
	    if (e.success) {
	        Ti.API.fireEvent('LoggedIn');
	    }
	});
	
	Ti.Facebook.addEventListener('logout', function(e) {
	    alert('Logged out');
	});
	    
	// Add the button.  Note that it doesn't need a click event listener.
	self.add(Ti.Facebook.createLoginButton({
	    top : 50,
	    style : Ti.Facebook.BUTTON_STYLE_WIDE
	}));
	
	return self;
}

module.exports = Login;