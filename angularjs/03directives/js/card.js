var app = angular.module('courseApp', ['myApp'])

app.controller('CardCtrl', function ($scope, $http) {
  $scope.courses = [];
  $http({
    url : "http://localhost:8080/courses/",
    method: "GET"
  }).then(function(res){
    console.log(res);
    $scope.courses = res.data
  })

  $scope.addCourse = function(){
    console.log('Add a course!');
    console.log($scope.course);
    // console.log($scope.summary);
    $http({
      url : "http://localhost:8080/courses/",
      method: "POST",
      data: $scope.course
    }).then(function(res){
      console.log(res);
      $scope.message = 'Successfully created a course!'
      // $scope.courses = res.data
    })
  }

  // $scope.courses = [
  //     { title: 'AngularJS', summary: 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop' },
  //     { title: 'ReactJS', summary: ' React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.' },
  //     { title: 'EmberJS', summary: 'Write dramatically less code with Embers Handlebars integrated templates that update automatically when the underlying data changes.' },
  //     { title: 'CanJS', summary: ' CanJS is an evolving and improving set of client side JavaScript architectural libraries that balances innovation and stability. It targets experienced developers building complex applications with long futures ahead of them.' },
  //     { title: 'Java', summary: ' Even Java supports JS integration' }
  // ]
})

app.directive('sCard', function(){
     return{
        restrict: 'AEC',
         templateUrl: 'js/partial/card.html',
         replace: true,
         scope: {
            title : '@title'
            // @, = , &
         },
         link: function(scope, element, attrs){
          //  scope.title = attrs.title  
           scope.summary = attrs.summary  
          //  console.log(attrs.caption);

          //  element.bind('click', function(){
          //    scope.count = parseInt(scope.count) + 1
          //    console.log(scope.count);
          //    scope.$apply();
          //  })
         }
     }
})
