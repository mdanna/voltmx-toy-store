define({ 

	onViewCreated(){

		this.view.preShow = () => {
			const category = this.navigationContext;
			if(category){
				this.view.cmpDefaultHeader.title = category;
				let products;
				switch(category){
					case 'Favorites':
						products = appData.getFavorites();
						break;
					case 'New Products':
						products = appData.getNewProducts();
						break;
					default:
						products = appData.getProductsByCategory(category);
						break;
				}
				this.view.cmpSearchResults.data = products;
			}
		};
	},
	

});