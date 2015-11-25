app.service('ProdutoService', ['$http', function($http){
	
	var produtos = [
						{
							nome: 'Produto 1',
							descricao: 'Descricao 1',
							custo:10,
							preco:20
						},
						{
							nome: 'Produto 2',
							descricao: 'Descricao 2',
							custo:10,
							preco:20
						},
						{
							nome: 'Produto 2',
							descricao: 'Descricao 2',
							custo:10,
							preco:20
						},
						{
							nome: 'Produto 3',
							descricao: 'Descricao 3',
							custo:10,
							preco:20
						},
						{
							nome: 'Produto 4',
							descricao: 'Descricao 4',
							custo:10,
							preco:20
						}

					]

		return { 
			getProdutos : function(){	return produtos;}
		}

	}]);