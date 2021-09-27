define({ 

	onViewCreated(){
		this.view.init = () => {
			this.view.flxImage.doLayout = () => {
				const imageHeight = kony.os.deviceInfo().screenWidth;
				this.view.flxImage.height = kony.os.deviceInfo().screenWidth;
				this.view.flxRounded.top = imageHeight - 20;
				this.view.flxContent.top = imageHeight + 20;
			};
			
			this.view.flxBack.onClick = () => {
				new kony.mvc.Navigation(kony.application.getPreviousForm().id).navigate();
			};
			
			this.view.lblMoreDetails.onTouchEnd = () => {
				this.view.lblMoreDetails.isVisible = false;
				this.view.lblText.maxNumberOfLines = null;
			};
			
			this.view.lblText.onTouchEnd = () => {
				if(!this.view.lblMoreDetails.isVisible){
					this.view.lblText.maxNumberOfLines = 3;
					this.view.lblMoreDetails.isVisible = true;
				}
			};
		};
	}

});