define({ 

	onViewCreated(){
		this.view.init = () => {
			this.setNewProducts();
			this.setPopularProducts();
			this.setFavorites();
		};
	},
	
	setNewProducts(){
		this.view.flxNewProductsList.removeAll();
		const newProducts = appData.getNewProducts();
		newProducts.forEach((product, index) => {
			const component = new com.hcl.toystore.TeaserBig({
				id: `cmpNewProduct${index}`,
				width: '170dp',
				height: '100%'
			}, {}, {});
			component.image = product.img;
			component.title = product.name;
			component.info = 'New Item';
			component.price = product.price;
			component.like = product.like;
			component.onClickImage = () => {
				new kony.mvc.Navigation('frmProduct').navigate(product);
			};
			this.view.flxNewProductsList.add(component);
		});
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
				new kony.mvc.Navigation('frmProduct').navigate(product);
			};
			currContainer.add(component);
		});
	},
	
	setFavorites(){
			this.view.flxFavoritesList.removeAll();
			const products = appData.getFavorites();
			products.forEach((product, index) => {
				const component = new com.hcl.toystore.TeaserBig({
					id: `cmpFavorite${index}`,
					width: '170dp',
					height: '100%'
				}, {}, {});
				component.image = product.img;
				component.title = product.name;
				component.info = product.subtitle;
				component.price = product.price;
				component.like = product.like;
				component.onClickImage = () => {
					new kony.mvc.Navigation('frmProduct').navigate(product);
				};
				this.view.flxFavoritesList.add(component);
			});
	}
});