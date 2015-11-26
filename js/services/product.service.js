scApp.service('ProductService', ['$http', function($http){
	
	var products = [
	{
		id: 1,
		name: 'Produto 1',
		description: 'Descricao 1',
		cost:10,
		price:20
	},
	{
		id: 2,
		name: 'Produto 2',
		description: 'Descricao 2',
		cost:10,
		price:20
	},
	{
		id: 3,
		name: 'Produto 3',
		description: 'Descricao 3',
		cost:10,
		price:20
	},
	{
		id: 4,
		name: 'Produto 4',
		description: 'Descricao 4',
		cost:10,
		price:20
	},
	{
		id: 5,
		name: 'Produto 5',
		description: 'Descricao 5',
		cost:10,
		price:20
	}
	];

	this.saveProduct = function saveProduct(product){
		if(product.id === undefined){
			products.push(product);
		} else{
			angular.forEach(products, function(value, key){
				if(product.id === value.id){
					products[key] = product;
				}
			});
		}

	};

	this.removeProduct = function removeProduct(product){
		var index = products.indexOf(product);
		products.splice(index, 1);
	};

	this.getProducts = function getProducts(){ 
		return products;
	};

}]);