define(function() {

	return {
		INIT_DONE: false,
		
		constructor(baseConfig, layoutConfig, pspConfig) {
			if(!this.INIT_DONE){
				this.view.postShow = () => {
					if(this.view){
						this.view.lblCount.text = parseInt(this.view.lblCount.text || 0).toFixed(0);
						
						this.view.flxMinus.onClick = () => {
							const value = parseInt(this.view.lblCount.text);
							if(value > 1){
								const newValue = value - 1;
								this.view.lblCount.text = newValue.toFixed(0);
								this.onClickCounter(newValue);
							}
						};

						this.view.flxPlus.onClick = () => {
							const newValue = parseInt(this.view.lblCount.text) + 1;
							this.view.lblCount.text = newValue.toFixed(0);
							this.onClickCounter(newValue);
						};
					}
				};
				this.INIT_DONE = true;
			}
		},
		
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
    },
		
		onClickCounter(value) {}
	};
});