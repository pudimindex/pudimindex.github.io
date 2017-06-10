var notebooks = angular.module('notebooks', [])

.controller('NotebookListCtrl', function($scope) {
	var notebooks = [
		{restaurant: 'Angelicos', data: '00/00/0000',  vote: 100},
		{restaurant: 'Teste', data: '00/00/0000',  vote: 2},
		{restaurant: 'Yaçai', data: '00/00/0000',  vote: 10}
	];
	
	$scope.sort = 'vote';
	$scope.reverse = true;
	$scope.notebooks = notebooks;

	$scope.addItem = function(){
			if ($scope.item === ""){
				return false;
			} 
			else {
					var item = {
					 "restaurant": "",
					 "data": "00/00/0000",
					 "vote": 0
					}
					$scope.notebooks.push(item);
			}
	}   
	
	$scope.deleteItem = function(index){
		var index = $scope.notebooks.indexOf(index)
			$scope.notebooks.splice(index, 1);     
	}
	
	$scope.sortBy = function(sort) {
		$scope.reverse = ($scope.sort === sort) ? !$scope.reverse : false;
		$scope.sort = sort;
	};
	
});
