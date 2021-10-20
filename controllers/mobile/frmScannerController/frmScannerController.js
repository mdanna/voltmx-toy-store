define({ 

	onViewCreated(){
		this.view.init = () => {
			if(this.view){
				this.view.flxBack.onClick = () => {
					new kony.mvc.Navigation('frmSearch').navigate();
					//#ifdef iphone
					kony.application.destroyForm('frmScanner');
					//#endif
				};

				this.view.barcodeqrscanner.afterScan = (text) => {
					new kony.mvc.Navigation('frmSearch').navigate(text);
					//#ifdef iphone
					kony.application.destroyForm('frmScanner');
					//#endif
				};
			}
		};
	}

});