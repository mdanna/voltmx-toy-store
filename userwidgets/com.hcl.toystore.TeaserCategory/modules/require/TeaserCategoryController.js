define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.onClick = () => {
				new kony.mvc.Navigation('frmFavorites').navigate(this.category);
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'category', () => {
        return this._category;
      });
      defineSetter(this, 'category', value => {
        this._category = value;
      });
    }
	};
});