define({ 
	onViewCreated() {
		this.view.flxKeyword.onClick = () => {
			mEventManager.publish(globals.ON_CLICK_KEYWORD);
		};

		this.view.flxClear.onClick = () => {
			mEventManager.publish(globals.ON_CLEAR_KEYWORD);
		};
	}

});