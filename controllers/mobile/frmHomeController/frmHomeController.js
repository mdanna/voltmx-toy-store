define({ 

	onViewCreated(){
		this.view.init = () => {
			this.setHomeHeroProduct();
			this.setNewProducts();
			this.setPopularProducts();
			this.setFavorites();
		};
	},

	setHomeHeroProduct(){
		const homeHeroProduct = appData.getHomeHeroProduct();
		this.view.imgHomeHero.src = homeHeroProduct.img;
		this.view.lblSubtitle.text = homeHeroProduct.subtitle;
		this.view.lblHomeHero.text = homeHeroProduct.name;
		this.view.lblPrice.text = homeHeroProduct.price;
		this.view.flxHomeHero.onClick = () => new kony.mvc.Navigation('frmProduct').navigate(homeHeroProduct.name);	
	
		this.view.flxHomeHeroImg.doLayout = () => {
			const size = (kony.os.deviceInfo().screenWidth * 0.9) + 'dp';
			this.view.flxHomeHeroImg.height = size;
			this.view.flxHomeHeroImg.width = size;
		};
	},

	setNewProducts(){
		this.view.flxNewProductsList.removeAll();
		const newProducts = appData.getNewProducts(3);
		newProducts.forEach((product, index) => {
			const component = new com.hcl.toystore.TeaserBig({
				id: `cmpNewProduct${index}`,
				width: '170dp',
				height: '100%'
			}, {}, {});
			component.image = product.img;
			component.title = product.name;
			component.subtitle = product.subtitle;
			component.price = product.price;
			component.like = product.like;
			component.onClickImage = () => {
				new kony.mvc.Navigation('frmProduct').navigate(product.name);
			};
			this.view.flxNewProductsList.add(component);
		});
		this.view.flxNewProductsList.forceLayout();
	},

	setPopularProducts(){
		this.view.flxPopularList.removeAll();
		const popularProducts = appData.getPopularProducts();
		let currContainer = null;
		popularProducts.forEach((product, index) => {
			if(index % 2 === 0){
				currContainer = new kony.ui.FlexContainer({
					id: `flxColumn${index}`,
					width: '280dp',
					height: '200dp',
					layoutType: kony.flex.FLOW_VERTICAL
				}, {}, {});
				this.view.flxPopularList.add(currContainer);
			}

			const component = new com.hcl.toystore.TeaserMedium({
				id: `cmpPopularProduct${index}`,
				width: '280dp',
				height: '100dp'
			}, {}, {});
			component.image = product.img;
			component.title = product.name;
			component.price = product.price;
			component.like = product.like;
			component.onClickImage = () => {
				new kony.mvc.Navigation('frmProduct').navigate(product.name);
			};
			currContainer.add(component);
		});
	},

	setFavorites(){
		this.view.lblSeeAllNewProducts.onTouchEnd = () => new kony.mvc.Navigation('frmFavorites').navigate('New Products');
		this.view.lblSeeAllFavorites.onTouchEnd = () => new kony.mvc.Navigation('frmFavorites').navigate('Favorites');
		
		this.view.flxFavoritesList.removeAll();
		const products = appData.getFavorites(3);
		products.forEach((product, index) => {
			const component = new com.hcl.toystore.TeaserBig({
				id: `cmpFavorite${index}`,
				width: '170dp',
				height: '100%'
			}, {}, {});
			component.image = product.img;
			component.title = product.name;
			component.subtitle = product.subtitle;
			component.price = product.price;
			component.like = product.like;
			component.onClickImage = () => {
				new kony.mvc.Navigation('frmProduct').navigate(product.name);
			};
			this.view.flxFavoritesList.add(component);
		});
		this.view.flxFavoritesList.forceLayout();
	}
});