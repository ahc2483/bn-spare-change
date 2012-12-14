exports.FullScreenView = function(){
	return Ti.UI.createView({
		width: Ti.Platform.displayCaps.platformWidth,
		height: Ti.Platform.displayCaps.platformHeight,
		backgroundColor:'F8F8F8',
	});
}
