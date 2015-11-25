app.controller('ProdutoController', ['$scope', 'ProdutoService', function($scope, ProdutoService){
	$scope.titulo = 'Produtos';
	$scope.produtos = ProdutoService.getProdutos();
}]);