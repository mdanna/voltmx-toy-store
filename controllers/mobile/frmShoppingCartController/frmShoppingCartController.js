define({ 

	onViewCreated() {
		this.view.init = () => {
			this.view.cmpLightHeader.onClickBack = () => {
				new kony.mvc.Navigation('frmHome'). navigate();
			};
		};
		
		this.view.preShow = () => {
			this.loadShoppingCart();
		};
	},
	
	loadShoppingCart() {
		this.view.flxShoppingCartItems.removeAll();
		let index = 0;
		for(let key in shoppingCart.items){
			const item = shoppingCart.items[key];
			const shoppingCartItem = new com.hcl.toystore.ShoppingCartItem({
				id:	`shoppingCartItem{++index}`
			}, {}, {});
			shoppingCartItem.image = appData.products[key].img;
			shoppingCartItem.title = key;
			shoppingCartItem.price = '$' + item.price;
			shoppingCartItem.amount = item.amount;
			this.view.flxShoppingCartItems.add(shoppingCartItem);
		}
		const {amount, total} = shoppingCart.getTotals();
		this.view.lblTotal.text = `Total (${amount} article${amount !== 1 && 's'})`;
		this.view.lblPrice.text = '$' + total.toFixed(2); 
	}
});