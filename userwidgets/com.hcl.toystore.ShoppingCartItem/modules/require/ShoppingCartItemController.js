define(function() {
	return {
		INIT_DONE: false,
		
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					
					this.view.flxImage.onClick = () => {
						this.onClickImage();
					};
					
					this.view.cmpItemCounter.onClickCounter = (amount) => {
						mEventManager.publish(globals.ON_CLICK_COUNTER, {
							product: this.view.lblName.text,
							amount
						});
					};
					
					this.view.flxRemove.onClick = () => {
						mEventManager.publish(globals.ON_CLICK_REMOVE_ITEM, this.view.lblName.text);
					};
					
					this.INIT_DONE = true;
				}
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters() {
      defineGetter(this, 'amount', () => {
        return parseInt(this.view.cmpItemCounter.count);
      });
      defineSetter(this, 'amount', value => {
        this.view.cmpItemCounter.count = value.toFixed(0);
      });
    },
		
		onClickImage(){}

	};
});