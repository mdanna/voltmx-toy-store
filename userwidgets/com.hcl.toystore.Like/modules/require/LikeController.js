define(function() {

	return {
		INIT_DONE: false,

		constructor: function(baseConfig, layoutConfig, pspConfig) {
			mEventManager.subscribe(globals.ON_LIKE_CHANGED, ({context, value, id}) => {
				if(context && context === this.context && id !== this.Name && value !== this.like){
					this.view.lblLikeOn.isVisible = !!value;
					this.view.lblLikeOff.isVisible = !value;
				}	
			});
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					this.view.flxLike.onClick = () => {
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
				if(this.view && value !== this._like){
					this._like = value;
					this.view.lblLikeOn.isVisible = !!value;
					this.view.lblLikeOff.isVisible = !value;
					if(this.context){
						appData.products[this.context].like = value;
						mEventManager.publish(globals.ON_LIKE_CHANGED, {
							context: this.context,
							value,
							id: this.Name
						});
						this.onChange(value);
					}
				}
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