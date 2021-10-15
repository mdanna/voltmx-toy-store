define({ 
	TITLE1: 'Cart',
	TITLE2: 'Checkout',
	TITLE3: 'Credit/Debit Card',
	TITLE4: '',
	
	BTN1: 'Checkout',
	BTN2: 'Continue',
	BTN3: 'Place Order',
	BTN4: 'Continue Shopping',
	
	step: 1,

	onViewCreated() {
		this.view.init = () => {
			this.view.cmpLightHeader.onClickBack = () => {
				if(this.step === 1 || this.step === 4){
					new kony.mvc.Navigation('frmHome'). navigate();
				} else {
					this.step--;
					this.setWidgetsForStep();
				}
			};
			
			this.view.flxButton.onClick = () => {
				if(this.view.flxButton.skin !== 'sknFlxGrey'){
					if(this.step === 4){
						new kony.mvc.Navigation('frmHome'). navigate();
					} else {
						if(this.step === 3){
							shoppingCart.reset();
						}
						this.step++;
						this.setWidgetsForStep();
					}
				}
			};
			
			mEventManager.subscribe(globals.ON_CLICK_COUNTER, ({product, amount}) => {
				shoppingCart.items[product].amount = amount;
				const {amount: totalAmount, total} = shoppingCart.getTotals();
				this.view.lblTotal.text = `Total (${totalAmount} article${totalAmount === 1 ? '' : 's'})`;
				this.view.lblPrice.text = '$' + total.toFixed(2);
			});
			
			mEventManager.subscribe(globals.ON_CLICK_REMOVE_ITEM, (product) => {
				shoppingCart.removeItem(product);
				new kony.mvc.Navigation('frmShoppingCart'). navigate();
			});
		};
		
		this.view.preShow = () => {
			this.step = 1;
			this.setWidgetsForStep();
			this.loadShoppingCart();
		};
		
	},
	
	loadShoppingCart() {
		this.view.flxShoppingCartItems.removeAll();
		let index = 0;
		for(let key in shoppingCart.items){
			index++;
			const item = shoppingCart.items[key];
			const shoppingCartItem = new com.hcl.toystore.ShoppingCartItem({
				id:	`shoppingCartItem{index}`
			}, {}, {});
			shoppingCartItem.image = appData.products[key].img;
			shoppingCartItem.title = key;
			shoppingCartItem.price = '$' + item.price;
			shoppingCartItem.amount = item.amount;
			this.view.flxShoppingCartItems.add(shoppingCartItem);
		}
		this.view.flxShoppingCartItems.forceLayout();
		this.view.flxEmptyCart.isVisible = (index === 0);
		this.view.flxShoppingCartItems.isVisible = (index !== 0);
		this.view.flxButton.skin = (index === 0) ? 'sknFlxGrey' : 'sknFlxBlueGreen';
		const {amount, total} = shoppingCart.getTotals();
		this.view.lblTotal.text = `Total (${amount} article${amount === 1 ? '' : 's'})`;
		this.view.lblPrice.text = '$' + total.toFixed(2); 
	},
	
	setWidgetsForStep(){
		for(let i = 1; i <= 4; i++){
			this.view[`flxStep${i}`].isVisible = (i === this.step);
		}
		this.view.cmpLightHeader.title = this[`TITLE${this.step}`];
		this.view.lblButton.text = this[`BTN${this.step}`];
	},
});