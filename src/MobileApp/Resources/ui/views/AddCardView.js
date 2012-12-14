function AddCardView(){
	
	var self = SpareChange.UI.FullScreenView();
	
	self.add(Ti.UI.createLabel({
		text: 'Time To Add Your Card'
	}));
	
	return self;
}

module.exports = AddCardView;
