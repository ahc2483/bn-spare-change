function AddCardView(){
	
	var self = SpareChange.UI.FullScreenView();
	
	var titleLabel = new SpareChange.UI.Title();
	titleLabel.text = 'Add Card';
	
	
	var cardNumber = new SpareChange.UI.TextField();
	cardNumber.hintText = 'card number';
	cardNumber.width = 200;
	cardNumber.top = titleLabel.top + titleLabel.height + SpareChange.Settings.UIControlVerticalSpacing;
	
	var cardTypePicker = Ti.UI.createPicker()
	cardTypePicker.top = -1000;
	
	var cardTypes = [];
	cardTypes[0] = Ti.UI.createPickerRow({title:'American Express'});
	cardTypes[1] = Ti.UI.createPickerRow({title:'Discover'});
	cardTypes[2] = Ti.UI.createPickerRow({title:'Master Card'});
	cardTypes[3] = Ti.UI.createPickerRow({title:'Visa'});
	
	cardTypePicker.add(cardTypes);
	
	var cardTypeInput = new SpareChange.UI.TextField();
	cardTypeInput.hintText = 'card type';
	cardTypeInput.top = cardNumber.top + cardNumber.height + SpareChange.Settings.UIControlVerticalSpacing;
	cardTypeInput.width = cardNumber.width;
	cardTypeInput.enabled = false;
	cardTypeInput.focusable = false;
	
	var addButton = new SpareChange.UI.Button();
	addButton.Title = 'Add Card';
	addButton.top = cardTypeInput.top + cardTypeInput.height + SpareChange.Settings.UIControlVerticalSpacing;
	
	cardTypeInput.addEventListener('click', function() {
		cardTypePicker.top = 5;
	});
	
	cardTypePicker.addEventListener('change', function() {
		cardTypeInput.value = cardTypePicker.getSelectedRow(0).title;
		cardTypePicker.top = -1000;
	});
	
	self.add(titleLabel);
	self.add(cardNumber);
	self.add(cardTypeInput);
	self.add(addButton);
	self.add(cardTypePicker);
	
	return self;
}


module.exports = AddCardView;
