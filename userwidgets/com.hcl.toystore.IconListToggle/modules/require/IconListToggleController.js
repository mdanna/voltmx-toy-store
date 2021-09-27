define(function() {

	return {
		INIT_DONE: false,

		constructor(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					this.view.flxIcon.onClick = () => {
						if(this.mode === 'list') {
							this.mode = 'icon';	
							this.onModeChange('icon');
						}
					};
					this.view.flxList.onClick = () => {
						if(this.mode === 'icon') {
							this.mode = 'list';							
							this.onModeChange('list');
						}
					};
					this.INIT_DONE = true;
				}
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters() {
      defineGetter(this, 'mode', () => {
        return this._mode;
      });
      defineSetter(this, 'mode', value => {
        this._mode = value;
				this.view.lblIconSelected.isVisible = value === 'icon';
				this.view.lblIconUnselected.isVisible = value === 'list';
				this.view.lblListSelected.isVisible = value === 'list';
				this.view.lblListUnselected.isVisible = value === 'icon';
      });
    },
		
		onModeChange(mode){}
	};
});