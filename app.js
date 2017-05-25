var app = angular.module('numericodeApp', [])

app.controller('numericodeController', function($scope){
	

	$scope.decode = function(){
		var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z']
		var output = ""
		var input = $scope.userInput
		var inputArray = input.split(" ")
		for(var i=0; i< inputArray.length; i++){
			intOfInputArray = parseInt(inputArray[i])
			if (intOfInputArray < 27) {
				output = output + alphabetArray[intOfInputArray-1]
			}
			else {
				var dividingNumber = intOfInputArray
				while (true) {
					dividingNumber = dividingNumber/27
					if(dividingNumber<27 && dividingNumber%1 === 0){
						output = output + alphabetArray[dividingNumber-1]
						break
					}
					else if(!(dividingNumber%1 === 0)){
						output = output + " "
						break
					}
				}
			}
		}
		$scope.output = output 
		localStorage.setItem('savedUserInput', $scope.userInput)
	};

	if(localStorage.getItem('savedUserInput')){
      $scope.userInput= localStorage.getItem('savedUserInput')
      $scope.decode()
      }
});