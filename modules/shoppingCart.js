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
		shoppingCart.items[name].price = shoppingCart.getItemPrice(name);
	},
	
	removeItem:(name) => {
		delete shoppingCart.items[name];
		shoppingCart.items = shoppingCart.items || {};
	},
	
	getTotals: () => {
		let total = 0;
		let amount = 0;
		for(let key in shoppingCart.items){
			const item = shoppingCart.items[key];
			total += (item.price * item.amount);
			amount += item.amount;
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