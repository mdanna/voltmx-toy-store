define({ 

	onViewCreated(){

		this.view.preShow = () => {
			const category = this.navigationContext;
			if(category){
				this.view.cmpDefaultHeader.title = category;
				const favorites = category !== 'Favorites' ? appData.getProductsByCategory(category) : appData.getFavorites();
				this.view.cmpSearchResults.data = favorites;
			}
		};
	},
	

});