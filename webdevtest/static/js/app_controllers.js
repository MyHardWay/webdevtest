app.controller('samplecontoller', ['$scope', '$http', '$stateParams', '$state', function ($scope,   $http,   $stateParams, $state)  {




$scope.change_car_name = function () {
            var auto_data = {};
	    auto_data['name'] = $scope.editing_form.auto_name.trim();
            $http.put('/api/v1/auto_model/'+$stateParams.car_model_id+'/', auto_data).success(function(data) {
			idx = $scope.get_car_index($scope.auto_models,$scope.selected_car);
			$scope.auto_models[idx] = data;
			$scope.selected_car = data;
			$scope.editing_form.error = []
            	}).error(function(data, status, headers, config) {
                        if(status=401){
				$scope.editing_form.error = data['message'];
                        }
                });		
        };


$scope.delete_car = function () {
            $http.delete('/api/v1/auto_model/'+$stateParams.car_model_id+'/').success(function() {
	    	idx = $scope.get_car_index($scope.auto_models,$scope.selected_car); 
	    	$scope.auto_models.splice(idx, 1);
		if (idx>0) {
			id = $scope.auto_models[idx-1].id;
			$state.go('auto_model.view', {car_model_id:id});
			
		 } else {
			$state.go('auto_model');}
		}).error(function(data, status, headers, config) {
                        if(status=401){
				window.location = '/admin';
                        }
                });		

        };

$scope.get_car_index = function (car_array, car) {
	 for(var idx = -1, max_idx = car_array.length; ++idx < max_idx;)
            if(angular.equals(car_array[idx], car)) return idx;
        return -1;
};




$scope.create_auto_model = function () {
	    var data = {};
	    data['name'] = $scope.car_creation_form.auto_name.trim();
            $http.post('/api/v1/auto_model/', data).success(function(data) {
			$scope.auto_models.push(data);
			$scope.car_creation_form.error = [];
            	}).error(function(data, status, headers, config) {
                        if(status=401){
				$scope.car_creation_form.error = data['message'];
                        }
                });	
        };
	    
}]);


