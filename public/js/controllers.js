 // Managing the poll list
        function PostListCtrl($scope, $http) {
        	// when landing on the page, get all todos and show them
        	// when landing on the page, get all todos and show them
        	$http.get('/areaguide')
        		.success(function(data) {
        			$scope.data = data;
        		})
        		.error(function(data) {
        			console.log('Error: ' + data);
        		});
        }
        // Voting / viewing poll results
        function PostItemCtrl($scope, $routeParams) {
          $scope.posts = {};
        }
        // Creating a new poll
        function PostNewCtrl($scope) {
          $scope.posts = {
            title: '',
            body: ''
          };
          $scope.createpost = function() {};
        }