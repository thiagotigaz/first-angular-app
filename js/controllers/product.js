scApp.controller('ProductCtrl', ['$scope', 'ProductService', function($scope, ProductService){

	$scope.products = ProductService.getProducts();
	$scope.p = [];

	$scope.saveProduct = function(){
		ProductService.saveProduct($scope.p);
		$scope.p = [];
	};

	$scope.removeProduct = function(product){
		ProductService.removeProduct(product);
	};

	$scope.clearForm = function(){
		$scope.p = [];
	};
}]);