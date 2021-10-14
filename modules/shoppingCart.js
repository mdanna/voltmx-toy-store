const shoppingCart = {
	items: {},
	
	getItemPrice: (name) => {
		const product = appData.products[name];
		return parseFloat(product.price.replace('$', ''));
	},
	
	addItem: (name, amount) => {
		if(shoppingCart.items[name]){
			shoppingCart.items[name].amount += amount;
		} else {
			shoppingCart.items[name] = {
				amount
			};
		}
		shoppingCart.items[name].price = shoppingCart.getItemPrice(name) * shoppingCart.items[name].amount;
	},
	
	removeItem:(name) => {
		shoppingCart.items.remove(name);
	},
	
	getTotals: () => {
		let total = 0;
		let amount = 0;
		for(let key in shoppingCart.items){
			total += (shoppingCart.items[key].price * amount);
			amount += shoppingCart.items[key].amount;
		}
		return {
			total,
			amount
		};
	},
	
	reset: () => {
		shoppingCart.items = {};
	}
};