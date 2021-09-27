define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'rating', () => {
        return this._rating;
      });
      defineSetter(this, 'rating', value => {
        this._rating = value;
				if(isNaN(value)){
					
				}
      });
    }
	};
});