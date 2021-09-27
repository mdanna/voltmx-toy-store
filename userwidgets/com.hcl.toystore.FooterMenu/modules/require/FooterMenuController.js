define(function() {
	const SKIN_SELECTED = 'lblMenuItemSelected';
	const SKIN_UNSELECTED = 'lblMenuItemUnselected';
	
	return {
		INIT_DONE: false,
		
		constructor(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				this.selectItem(this.itemSelected);
				if(!this.INIT_DONE){
					this.view.flxMenuHome.onClick = () => {
						new kony.mvc.Navigation('frmHome').navigate();
					};
					this.view.flxMenuCamera.onClick = () => {
						new kony.mvc.Navigation('frmCamera').navigate(true);
					};
					this.view.flxMenuSearch.onClick = () => {
						new kony.mvc.Navigation('frmSearch').navigate();
					};
					this.view.flxMenuLocation.onClick = () => {
						new kony.mvc.Navigation('frmLocation').navigate();
					};
					this.view.flxMenuCart.onClick = () => {
						new kony.mvc.Navigation('frmCart').navigate();
					};
					this.INIT_DONE = true;
				}
			};
		},
		
		//Logic for getters/setters of custom properties
		initGettersSetters() {
      defineGetter(this, 'itemSelected', () => {
        return this._itemSelected;
      });
      defineSetter(this, 'itemSelected', value => {
        this._itemSelected = value;
      });
    },
		
		selectItem(item){
			this.view.lblMenuHome.skin = SKIN_UNSELECTED;
			this.view.lblMenuCamera.skin = SKIN_UNSELECTED;
			this.view.lblMenuSearch.skin = SKIN_UNSELECTED;
			this.view.lblMenuLocation.skin = SKIN_UNSELECTED;
			this.view.lblMenuCart.skin = SKIN_UNSELECTED;
			
			switch(item){
				case globals.MENU_ITEM_HOME:
					this.view.lblMenuHome.skin = SKIN_SELECTED;
					break;
				case globals.MENU_ITEM_CAMERA:
					this.view.lblMenuCamera.skin = SKIN_SELECTED;
					break;
				case globals.MENU_ITEM_SEARCH:
					this.view.lblMenuSearch.skin = SKIN_SELECTED;
					break;
				case globals.MENU_ITEM_LOCATION:
					this.view.lblMenuLocation.skin = SKIN_SELECTED;
					break;
				case globals.MENU_ITEM_CART:
					this.view.lblMenuCart.skin = SKIN_SELECTED;
					break;
				default:
					break;
			}
		},
		
		onItemSelection(item){
			//to be overridden 
		}
	};
});