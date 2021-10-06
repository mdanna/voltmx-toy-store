define({ 

	onViewCreated(){
		this.view.init = () => {
			this.view.flxImage.doLayout = () => {
				const imageHeight = kony.os.deviceInfo().screenWidth;
				this.view.flxImage.height = imageHeight;
				this.view.flxRounded.top = imageHeight - 20;
				this.view.flxContent.top = imageHeight + 20;
			};
			
			this.view.flxBack.onClick = () => {
				new kony.mvc.Navigation(kony.application.getPreviousForm().id).navigate();
			};
			
			this.view.lblMoreDetails.onTouchEnd = () => {
				this.view.lblMoreDetails.isVisible = false;
				this.view.lblText.maxNumberOfLines = null;
			};
			
			this.view.lblText.onTouchEnd = () => {
				if(!this.view.lblMoreDetails.isVisible){
					this.view.lblText.maxNumberOfLines = 3;
					this.view.lblMoreDetails.isVisible = true;
				}
			};
		};
		
		this.view.preShow = () => {
			let product = this.navigationContext || 'Movie Figure';
			if(product){
				if(typeof product === 'string'){
					product = {
						name: product,
						...appData.products[product]
					};
				}
				this.view.imgProduct.src = product.img;
				this.view.cmpLike.context = product.name;
				this.view.cmpLike.like = !!product.like;
				this.view.lblCategories.text = product.categories.join(', ');
				this.view.lblTitle.text = product.name;
				this.view.lblPrice.text = product.price;
				this.view.lblLocation.text = `Located at ${product.location}`;
				this.view.lblReviews.text = `Read Reviews (${product.numReviews})`;
				this.view.cmpRating.rating = product.rating;
				this.view.lblAvailable.text = `${product.availability} Available`;
			}
		};
	}

});