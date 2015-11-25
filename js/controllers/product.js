scApp.controller('ProductCtrl', ['$scope', 'ProductService', function($scope, ProductService){
	$scope.product;
	$scope.products = ProductService.getProducts();
}]);