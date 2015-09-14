

App.controller("ClientManagement", [ '$scope', '$http', '$modal','$timeout',
		'ClientServices', function($scope, $http, $modal,$timeout, ClientServices) {
			$scope.master = {};
			$scope.client = {};
			$scope.Addclient = function() {
				$scope.$modalInstance = $modal.open({
					scope : $scope,
					templateUrl : 'view/client-management/addclient.html',
					size : '',
				})
			};

			$scope.cancel = function() {
				$scope.$modalInstance.dismiss();
			};

			$scope.getClient = function(clientId){
				ClientServices.getClient(clientId).then(function(responseText){
					$scope.dbclient = responseText.data;
					console.log(responseText.data);
				})
			}
			
			
			$scope.AddClient = function(client) {
				    client.action='saveClient';
				    ClientServices.SaveClient(angular.copy(client)).then(function(responseText){
					$scope.$modalInstance.dismiss();
					$scope.isSuccess = true;
					$scope.message = responseText.data.message;
					$scope.client = {};
					$scope.getClient();
				});
			};
			
			$scope.deleteClient = function(clientId){
					$timeout(function () {
						if(confirm('Are you Sure to delete This Records ?')){
							ClientServices.deleteClient(clientId).then(function(responseText){
								$scope.isSuccess = true;
								$scope.message = responseText.data.message;
								$scope.getClient();	
							})
						}
					});
			}
			
			
			$scope.editClient = function(clientId){
				$scope.Addclient(); // open popup
				ClientServices.getClient(clientId).then(function(responseText){
					var db = responseText.data[1];
					$scope.client.name 		= db.client_name ;
					$scope.client.email		= db.client_email;
					$scope.client.phone		= db.client_phone;
					$scope.client.desc		= db.client_desc;
					$scope.client.id		= db.client_id;
				})
			}

} ])



