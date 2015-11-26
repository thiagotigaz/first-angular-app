scApp.controller('ProductCtrl', ['$scope', 'ProductService', function($scope, ProductService){

	$scope.products = ProductService.getProducts();
	$scope.p = [];

	$scope.addProduct = function(){
		ProductService.addProduct($scope.p);
		$scope.p = [];
	}

	$scope.removeProduct = function(product){
		ProductService.removeProduct(product);
	}

	$scope.clearForm = function(){
		$scope.p = [];
	};
}]);