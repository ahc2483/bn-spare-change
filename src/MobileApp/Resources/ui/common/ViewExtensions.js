exports.FullScreenView = function(){
	return Ti.UI.createView({
		width: Ti.Platform.displayCaps.platformWidth,
		height: Ti.Platform.displayCaps.platformHeight,
		backgroundColor:'F8F8F8',
	});
}

exports.TextField = function () {
	return Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		height: 25
	})
}

exports.Button = function () {
	return Ti.UI.createButton ({
		style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	})
}

exports.Title = function() {
	return Ti.UI.createLabel({
		color: '#ffffff',
		textAlign: 'center',
		top: 10,
		width: Ti.Platform.displayCaps.platformWidth,
		height: 30,
		backgroundColor:'#000099',
		font: {fontWeight: 'Bold'}
	});
}
