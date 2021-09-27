define({ 

	onViewCreated(){
		this.view.init = () => {
			this.view.flxImage.doLayout = () => {
				const imageHeight = kony.os.deviceInfo().screenWidth;
				this.view.flxImage.height = kony.os.deviceInfo().screenWidth;
				this.view.flxRounded.top = imageHeight - 20;
				this.view.flxContent.top = imageHeight + 20;
			};
		};
	}

});