define(function() {

	return {
		constructor(baseConfig, layoutConfig, pspConfig) {
			
		},
		//Logic for getters/setters of custom properties
		initGettersSetters() {
      defineGetter(this, 'rating', () => {
        return this._rating;
      });
      defineSetter(this, 'rating', value => {
				if(isNaN(value) || value < 0 || value > 5){
					this._rating = 0;
				} else {
					this._rating = value;
					this.setRating();
				}
      });
    },
		
		setRating() {
			const num = Math.ceil(this.rating) - this.rating <= this.rating - Math.floor(this.rating) ? 
						Math.ceil(this.rating) : Math.floor(this.rating);
			for(i = 1; i <=5 ; i++) {
					this.view['lblStarSelected' + i].isVisible = num >= i;
			} 
		}
	};
});