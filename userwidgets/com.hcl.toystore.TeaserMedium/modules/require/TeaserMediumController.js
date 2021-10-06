define(function() {

	return {
		INIT_DONE: false,
		
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {

				if(!this.INIT_DONE){
					this.view.flxImage.onClick = () => {
						this.onClickImage();
					};
					this.view.cmpLike.context = this.title;
					this.INIT_DONE = true;
				}
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters() {},
		
		onClickImage(){}

	};
});