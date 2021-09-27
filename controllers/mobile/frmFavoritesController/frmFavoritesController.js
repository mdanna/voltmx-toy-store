define({ 

	onViewCreated(){
		this.view.init = () => {
			this.view.cmpIconListToggle.onModeChange = (mode) => {
				this.view.flxContentIcon.isVisible = mode === 'icon';
				this.view.flxContentList.isVisible = mode === 'list';
			};
		};
	}

});