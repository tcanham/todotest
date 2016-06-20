
var app = angular.module("toDo", []);

app.controller("toDoList", ["$scope", function($scope) {
		/*Create array to hold list items*/
		$scope.listItems = [
			{todo_item: "Test Data"}
				
		];
		/* Function to add items to listItems array*/
		$scope.addItem = function () {
			if($scope.input){
			$scope.listItems.push({todo_item:$scope.input});
			$scope.input = '';
			$scope.errorMsg = '';
			}else{
				$scope.errorMsg = 'No To Do Item Entered';
			};
		};
		/* Function to remove items from listItems array*/
		$scope.remove = function(index) {
			$scope.listItems.splice(index, 1)
		};
}]);
