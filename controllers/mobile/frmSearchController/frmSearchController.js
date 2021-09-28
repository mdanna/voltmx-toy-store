define({ 

	onViewCreated(){
		this.view.init = () => {
			
			this.view.txtSearch.onTouchStart = () => {
				if(!this.view.txtSearch.text){
					this.view.cmpDefaultHeader.isVisible = false;
					this.view.flxContent.top = '0';
					this.view.flxContent.height = '100%';
					this.view.flxSearch.width = '80%';
					this.view.flxMicrophone.isVisible = false;
					this.view.flxCamera.isVisible = false;
				}
			};
			
			this.view.txtSearch.onDone = () => {
				if(!this.view.txtSearch.text){
					this.view.cmpDefaultHeader.isVisible = true;
					this.view.flxContent.top = '10%';
					this.view.flxContent.height = '90%';
					this.view.flxSearch.width = '60%';
					this.view.flxMicrophone.isVisible = true;
					this.view.flxCamera.isVisible = true;
				}
			};
			
			
		};
	}

});