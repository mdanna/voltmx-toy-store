define(function() {

	return {
		INIT_DONE: false,

		constructor: function(baseConfig, layoutConfig, pspConfig) {
			mEventManager.subscribe(globals.ON_LIKE_CHANGED, ({context, value}) => {
				if(context && context === this.context){
					this.like = value;
				}	
			});
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					this.view.flxLike.onClick = () => {
						//toggle the like icon upon clicking on the flxLike
// 						this.view.lblLikeOn.isVisible = !this.view.lblLikeOn.isVisible;
// 						this.view.lblLikeOff.isVisible = !this.view.lblLikeOff.isVisible;
						this.like = !this.like;
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
				if(this.context && value !== appData.products[this.context].like){
					appData.products[this.context].like = value;
					mEventManager.publish(globals.ON_LIKE_CHANGED, {
						context: this.context,
						value
					});
				}
      });
      defineGetter(this, 'context', () => {
        return this._context;
      });
      defineSetter(this, 'context', value => {
        this._context = value;
      });
    }
	};
});