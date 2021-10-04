define({ 

	onViewCreated(){
		this.view.init = () => {
			if(this.view){
				this.view.flxBack.onClick = () => {
					new kony.mvc.Navigation('frmSearch').navigate();
					kony.application.destroyForm('frmScanner');
				};

				this.view.barcodeqrscanner.afterScan = (text) => {
					new kony.mvc.Navigation('frmSearch').navigate(text);
					kony.application.destroyForm('frmScanner');
				};
			}
		};
	}

});