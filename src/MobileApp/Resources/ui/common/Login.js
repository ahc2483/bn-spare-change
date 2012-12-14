function Login() {
	var self = Ti.UI.createView();
	
	Ti.Facebook.appid = '498029910219578';
	Ti.Facebook.permissions = ['publish_stream'];
	Ti.Facebook.addEventListener('login', function(e) {
	    if (e.success) {
	        alert('Logged in');
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