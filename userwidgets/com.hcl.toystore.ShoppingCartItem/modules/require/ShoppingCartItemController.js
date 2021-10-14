define(function() {
	return {
		INIT_DONE: false,
		
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {

				if(!this.INIT_DONE){
					this.view.flxImage.onClick = () => {
						this.onClickImage();
					};
					this.INIT_DONE = true;
				}
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters() {
      defineGetter(this, 'amount', () => {
        return this.view.lstNumItems.value;
      });
      defineSetter(this, 'amount', value => {
        this.view.lstNumItems.value = value;
      });
    },
		
		onClickImage(){}

	};
});