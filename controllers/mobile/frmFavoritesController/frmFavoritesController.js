define({ 

	onViewCreated(){
		this.view.init = () => {
			this.view.cmpIconListToggle.onModeChange = (mode) => {
				this.view.flxContentIcon.isVisible = mode === 'icon';
				this.view.flxContentList.isVisible = mode === 'list';
			};
		};
		
		this.view.preShow = () => {
			const category = this.navigationContext;
			if(category){
				this.view.cmpDefaultHeader.title = category;
				const favorites = category !== 'Favorites' ? appData.getProductsByCategory(category) : appData.getFavorites();
				this.setFavorites(favorites);
			}
		};
	},
	
	setFavorites(favorites){
		this.view.flxContentList.removeAll();
		this.view.flxContentIcon.removeAll();
		
		let currRow = null;
		
		this.view.lblNumber.text = favorites.length;
		this.view.lblResults.text = favorites.length === 1 ? 'Result' : 'Results';
		
		favorites.forEach((favorite, index) => {
			
			//add to the list view
			let cmpTeaserSmall = new com.hcl.toystore.TeaserSmall({
				id: `cmpTeaserSmall${index}`,
				left: '8%',
				width: '92%',
				height: '50dp'
			}, {}, {});
			cmpTeaserSmall.image = favorite.img;
			cmpTeaserSmall.title = favorite.name;
			cmpTeaserSmall.price = favorite.price;
			cmpTeaserSmall.like = favorite.like;
			cmpTeaserSmall.onClickImage = () => new kony.mvc.Navigation('frmProduct').navigate(favorite.name);
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
			cmpTeaserBig.image = favorite.img;
			cmpTeaserBig.title = favorite.name;
			cmpTeaserBig.subtitle = favorite.subtitle;
			cmpTeaserBig.price = favorite.price;
			cmpTeaserBig.like = favorite.like;
			cmpTeaserBig.onClickImage = () => new kony.mvc.Navigation('frmProduct').navigate(favorite.name);
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

});