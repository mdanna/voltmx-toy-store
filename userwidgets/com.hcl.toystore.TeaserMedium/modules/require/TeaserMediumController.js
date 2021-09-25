define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

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