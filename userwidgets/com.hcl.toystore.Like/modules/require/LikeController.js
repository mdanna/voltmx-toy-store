define(function() {

	return {
		INIT_DONE: false,

		constructor: function(baseConfig, layoutConfig, pspConfig) {

			this.view.preShow = () => {
				if(!this.INIT_DONE){

					this.like = !!appData.products[this.context].like;
					this.view.lblLikeOn.isVisible = this.like;
					this.view.lblLikeOff.isVisible = !this.like;

					this.view.flxLike.onClick = () => {
						this.like = !this.like;
						appData.products[this.context].like = this.like;
						mEventManager.publish(globals.ON_LIKE_CHANGED, {
							context: this.context,
							value: this.like
						});
						this.onChange(this.like);					
					};

					mEventManager.subscribe(globals.ON_LIKE_CHANGED, ({context, value}) => {
						if(this.view && context === this.context){
							this.view.lblLikeOn.isVisible = !!value;
							this.view.lblLikeOff.isVisible = !value;
						}	
					});

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
			});
			defineGetter(this, 'context', () => {
				return this._context;
			});
			defineSetter(this, 'context', value => {
				this._context = value;
			});
		},

		onChange(value){}
	};
});