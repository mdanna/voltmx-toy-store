define(function() {

	return {
		INIT_DONE: false,
		
		constructor(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					this.view.flxInfo.isVisible = !!((this.info || "").trim());
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
    }
	};
});