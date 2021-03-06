(function() {
  
  angular
    .module('meanApp')
    .controller('workshopRequestCtrl', workshopRequestCtrl);
  workshopRequestCtrl.$inject = ['$location','$routeParams', 'meanData','$scope', 'authentication'];
    function workshopRequestCtrl ($location, $routeParams, meanData, $scope, authentication) {

    var vm = this;

    vm.workshopreqdata = {};

      console.log('Workshop Request controller is running');

	    $scope.workshopreq_apply = function(){
		//alert(vm.campuschampdata);
		authentication.applyWorkshopreq({"workshopreqdata":vm.workshopreqdata})
		.success(function(data) {
		//alert(JSON.stringify(data));	
			if(data.error==1){
				workshopreqForm.email.$setValidity("required", false);
				$("#workshopreq_error_div").show();
			}else{
				 $("#workshopreq_success_div").show();
			}
		})
		.error(function (e) {
		console.log(e);
		});
	    }

    }

})();

