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
      defineGetter(this, 'like', () => {
        return this._like;
      });
      defineSetter(this, 'like', value => {
        this._like = value;
				if(this.view.cmpLike){
					this.view.cmpLike.like = !!value;
				}
      });
		},
		
		onClickImage(){}

	};
});