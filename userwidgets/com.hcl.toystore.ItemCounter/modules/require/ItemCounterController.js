define(function() {

	return {
		INIT_DONE: false,
		
		constructor(baseConfig, layoutConfig, pspConfig) {
			if(!this.INIT_DONE){
				this.view.postShow = () => {
					if(this.view){
						this.view.flxMinus.onClick = () => {
							const value = parseInt(this.view.lblCount.text);
							if(value > 1){
								this.view.lblCount.text = value - 1;
							}
						};

						this.view.flxPlus.onClick = () => {
							this.view.lblCount.text = parseInt(this.view.lblCount.text) + 1;
						};
					}
				};
				this.INIT_DONE = true;
			}
		},
		
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
    }
	};
});