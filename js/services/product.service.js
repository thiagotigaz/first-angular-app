scApp.service('ProductService', ['$http', function($http){
	
	var products = [
	{
		name: 'Produto 1',
		description: 'Descricao 1',
		cost:10,
		price:20
	},
	{
		name: 'Produto 2',
		description: 'Descricao 2',
		cost:10,
		price:20
	},
	{
		name: 'Produto 2',
		description: 'Descricao 2',
		cost:10,
		price:20
	},
	{
		name: 'Produto 3',
		description: 'Descricao 3',
		cost:10,
		price:20
	},
	{
		name: 'Produto 4',
		description: 'Descricao 4',
		cost:10,
		price:20
	}
	]

	function addProduct(product){
		products.push(product);
	}

	function removeProduct(product){
		var index = products.indexOf(product);
		products.splice(index, 1);
	}

	function getProducts(){ 
		return products;
	}

	return { 
		addProduct: addProduct,
		removeProduct : removeProduct,
		getProducts : getProducts
	}

}]);