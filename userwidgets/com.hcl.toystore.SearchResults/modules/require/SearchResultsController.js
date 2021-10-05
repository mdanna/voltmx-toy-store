define(function() {

	return {
		INIT_DONE: false,
		
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				if(!this.INIT_DONE){
					this.view.cmpIconListToggle.onModeChange = (mode) => {
						this.view.flxContentIcon.isVisible = mode === 'icon';
						this.view.flxContentList.isVisible = mode === 'list';
					};
					this.INIT_DONE = true;
				}
			};
		},
		
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'data', () => {
        return this._data;
      });
      defineSetter(this, 'data', value => {
        this._data = value;
				if(value && Array.isArray(value)){
					this.setProducts(value);
				}
      });
    },
		
		setProducts(products){
			this.view.flxContentList.removeAll();
			this.view.flxContentIcon.removeAll();

			let currRow = null;

			this.view.lblNumber.text = products.length;
			this.view.lblResults.text = products.length === 1 ? 'Result' : 'Results';

			products.forEach((product, index) => {

				//add to the list view
				let cmpTeaserSmall = new com.hcl.toystore.TeaserSmall({
					id: `cmpTeaserSmall${index}`,
					left: '8%',
					width: '92%',
					height: '50dp'
				}, {}, {});
				cmpTeaserSmall.image = product.img;
				cmpTeaserSmall.title = product.name;
				cmpTeaserSmall.price = product.price;
				cmpTeaserSmall.like = product.like;
				cmpTeaserSmall.onClickImage = () => new kony.mvc.Navigation('frmProduct').navigate(product.name);
				this.view.flxContentList.add(cmpTeaserSmall);

				//add to the icon view
				if(index %2 === 0){
					currRow = new kony.ui.FlexContainer({
						id: `flxRow${index}`,
						width: '340dp',
						height: '260dp',
						centerX: '50%',
						layoutType: kony.flex.FLOW_HORIZONTAL
					}, {}, {});
					this.view.flxContentIcon.add(currRow);
				}
				let cmpTeaserBig = new com.hcl.toystore.TeaserBig({
					id: `cmpTeaserBig${index}`,
					width: '170dp',
					height: '100%'
				}, {}, {});
				cmpTeaserBig.image = product.img;
				cmpTeaserBig.title = product.name;
				cmpTeaserBig.subtitle = product.subtitle;
				cmpTeaserBig.price = product.price;
				cmpTeaserBig.like = product.like;
				cmpTeaserBig.onClickImage = () => new kony.mvc.Navigation('frmProduct').navigate(product.name);
				currRow.add(cmpTeaserBig);
			});

			//add the spacer flex
			const flxSpacerList = new kony.ui.FlexContainer({
				id: 'flxSpacerList',
				width: '100%',
				height: '18%'
			}, {}, {});
			this.view.flxContentList.add(flxSpacerList);
			const flxSpacerIcon = new kony.ui.FlexContainer({
				id: 'flxSpacerIcon',
				width: '100%',
				height: '18%'
			}, {}, {});
			this.view.flxContentIcon.add(flxSpacerIcon);
		}
	};
});