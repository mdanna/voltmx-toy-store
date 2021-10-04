const appData = {
	categories: [
		'Action Figures', 'Movies', 'Educational', 'Vehicles', 'Plush Toys', 'Building Tools', 'Cartoons'
	],
	
	products: {
		'Aviator Plush Bear': {
			subtitle: '10% off',
			categories: ['Plush Toys'],
			price: '$9.99',
			location: 'Aisle 2, Shelf C',
			rating: 3.9,
			availability: '25',
			numReviews: 5,
			img: 'productbearimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: true,
			isPopular: false,
			isFavorite: false
		},
		'Car': {
			subtitle: 'Sale',
			categories: ['Vehicles'],
			price: '$3.99',
			location: 'Aisle 1, Shelf A',
			rating: 4,
			availability: '35',
			numReviews: 8,
			img: 'productcarimg.png',
			movie: '',
			movieTitle: '',
			like: false,
			isNew: true,
			isPopular: false,
			isFavorite: false
		},
		'Cartoon Figures': {
			subtitle: '',
			categories: ['Cartoons', 'Action Figures'],
			price: '$10.99',
			location: 'Aisle 2, Shelf C',
			rating: 4.1,
			availability: '12',
			numReviews: 2,
			img: 'productcartoonimg.png',
			movie: '',
			movieTitle: '',
			like: false,
			isNew: true,
			isPopular: false,
			isFavorite: false
		},
		'Puzzle Cube': {
			subtitle: 'Sale',
			categories: ['Educational'],
			price: '$9.99',
			location: 'Aisle 2, Shelf A',
			rating: 4.3,
			availability: '30',
			numReviews: 12,
			img: 'productcubeimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: true
		},
		'Dice': {
			subtitle: '',
			categories: ['Educational, Building Tools'],
			price: '$3.99',
			location: 'Aisle 1, Shelf B',
			rating: 3.8,
			availability: '22',
			numReviews: 3,
			img: 'productdiceimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: true,
			isFavorite: false
		},
		'Movie Figure': {
			subtitle: '',
			categories: ['Action Figures, Movies'],
			price: '$9.99',
			location: 'Aisle 3, Shelf B',
			rating: 5,
			availability: '48',
			numReviews: 7,
			img: 'productmoviefigure.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: true
		},
		'Movie Robot Image': {
			subtitle: 'Lowest Price',
			categories: ['Action Figures, Movies'],
			price: '$9.99',
			location: 'Aisle 3, Shelf B',
			rating: 5,
			availability: '42',
			numReviews: 14,
			img: 'productmovierobotimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: false
		},
		'Colored Pencil Set': {
			subtitle: '',
			categories: ['Educational'],
			price: '$9.99',
			location: 'Aisle 4, Shelf B',
			rating: 4.1,
			availability: '12',
			numReviews: 5,
			img: 'productpencilsimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: true,
			isFavorite: false
		},
		'Princess Figure': {
			subtitle: 'Lowest Price',
			categories: ['Action Figures'],
			price: '$12.99',
			location: 'Aisle 2, Shelf C',
			rating: 3.4,
			availability: '19',
			numReviews: 8,
			img: 'productprincessimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: false
		},
		'Rainbow': {
			subtitle: '',
			categories: ['Educational'],
			price: '$6.99',
			location: 'Aisle 4, Shelf B',
			rating: 3.1,
			availability: '12',
			numReviews: 9,
			img: 'productrainbowimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: true,
			isFavorite: false
		},
		'RC Dancing Robot': {
			subtitle: '',
			categories: ['Action Figures, Movies, Vehicles'],
			price: '$29.99',
			location: 'Aisle 1, Shelf B',
			rating: 5,
			availability: '19',
			numReviews: 4,
			img: 'productrcrobotimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: true
		},
		'Retro Die Cast Car': {
			subtitle: '',
			categories: ['Vehicles'],
			price: '$8.99',
			location: 'Aisle 2, Shelf D',
			rating: 4.2,
			availability: '11',
			numReviews: 3,
			img: 'productretroimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: true,
			isFavorite: false
		},
		'Space Troopers': {
			subtitle: '',
			categories: ['Movies', 'Action Figures'],
			price: '$8.99',
			location: 'Aisle 3, Shelf C',
			rating: 4.8,
			availability: '10',
			numReviews: 12,
			img: 'productspacetroopersimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: true,
			isPopular: false,
			isFavorite: false
		},
		'Superhero Figure': {
			subtitle: '20% off',
			categories: ['Action Figures'],
			price: '$9.99',
			location: 'Aisle 2, Shelf A',
			rating: 4.3,
			availability: '5',
			numReviews: 14,
			img: 'productsuperheroimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: false
		},
		'Tree Alien Figure': {
			subtitle: 'Lowest Price',
			categories: ['Movies', 'Cartoons', 'Action Figures'],
			price: '$7.99',
			location: 'Aisle 1, Shelf C',
			rating: 3.4,
			availability: '5',
			numReviews: 6,
			img: 'productspacetroopersimg.png',
			movie: '',
			movieTitle: '',
			like: true,
			isNew: false,
			isPopular: false,
			isFavorite: false
		}
	},
	
	getNewProducts() {
		let newProducts = [];
		for(let key in appData.products){
			if(appData.products[key].isNew){
				newProducts.push({name: key, ...appData.products[key]});
			}
		}
		return newProducts;
	},
	
	getPopularProducts() {
		let popularProducts = [];
		for(let key in appData.products){
			if(appData.products[key].isPopular){
				popularProducts.push({name: key, ...appData.products[key]});
			}
		}
		return popularProducts;
	},
	
	getFavorites() {
		let favoriteProducts = [];
		for(let key in appData.products){
			if(appData.products[key].isFavorite){
				favoriteProducts.push({name: key, ...appData.products[key]});
			}
		}
		return favoriteProducts;
	},
	
	getProductsByCategory(category) {
		let ret = [];
		for(let key in appData.products){
			if(appData.products[key].categories.indexOf(category) >= 0){
				ret.push({name: key, ...appData.products[key]});
			}
		}
		return ret;
	},
	
	search(text) {
		let ret = [];
		text = text.trim.toLowerCase();
		for(let key in appData.products){
			if(key.toLowerCase().includes(text)){
				ret.push({name: key, ...appData.products[key]});	
			}
		}
		return ret;
	}
};