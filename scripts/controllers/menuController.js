angular.module('menuApp').controller('menuController', function($scope){

	$scope.about = {}
	$scope.about.header = "About Austin:"
	$scope.about.info = {
		part1: ("Born and raised in the Salt Lake Valley,") + 
		("there are few places that Austin would rather be than Northern Utah.") +
		(" He also has an appreciation for the beautiful weather of Southern California,") + 
		(" serving there for two years as a missionary in the greater Long Beach,") +
		(" California area. While working as a missionary, Austin learned Spanish,") + 
		(" and developed a love for Latin language and culture, including food.") + 
		(" There are few things he enjoys more than a good taco."),

		part2: (" Austin has attended school at Brigham Young University - Idaho. ") + 
		("He had been pursing a Bachelor's in Political Science when he discovered") + 
		(" his love for coding. He will be earning his Associate's Degree from BYU") + 
		(" - Idaho in July 2014, after which he will pursue a B.S. in Computer Science") + 
		(" at the University of Utah beginning Fall 2014. Currently, he is attending Dev") + 
		(" Mountain, a web development coding camp based out of Provo and Salt Lake City,") + 
		(" Utah. He is passionate about web design and programming, technology in general,") + 
		(" and is an avid follower of current events and politics. Though he has a wide variety") + 
		(" of interests and hobbies, his favorite activity is spending time with his beautiful") + 
		(" wife and daughter. The Hesterly Family is excited to welcome another baby girl into") + 
		(" their family in September of this year.")
	}

	$scope.about.quote = ('"Never, never, never give up." - Winston Churchill')
	
	$scope.menuDisplay = $scope.about;
	
	$scope.education = {}
	$scope.education.header = "Education:"
	$scope.education.info = {}
	$scope.education.info.part1 = angular.element('<h1>COWS!</h1>');
	

});