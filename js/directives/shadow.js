scApp.directive('editEntity', function(){
	return{
		restrict: 'A',
		scope: {
			editEntityDst:'=',
			editEntitySrc:'='
		},
		link: function(scope, ele, attr){
			ele.on('click', function(){
				scope.editEntityDst = angular.copy(scope.editEntitySrc);
				scope.$apply();
			});
		}
	};
});