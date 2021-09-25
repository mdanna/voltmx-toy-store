define(function() {

	return {
		INIT_DONE: false,

		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					this.view.flxLike.onClick = () => {
						//toggle the like icon upon clicking on the flxLike
						this.view.lblLikeOn.isVisible = !this.view.lblLikeOn.isVisible;
						this.view.lblLikeOff.isVisible = !this.view.lblLikeOff.isVisible;
					};
					this.INIT_DONE = true;
				}
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'like', () => {
        return this._like;
      });
      defineSetter(this, 'like', value => {
        this._like = value;
				this.view.lblLikeOn.isVisible = !!value;
				this.view.lblLikeOff.isVisible = !value;
      });
    }
	};
});