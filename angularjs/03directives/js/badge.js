var app = angular.module('myApp', [])

app.directive('sBadge', function(){
     return{
         templateUrl: 'js/partial/badge.html'
,
         scope: {},
         link: function(scope, element, attrs){
           scope.caption = attrs.caption  
           scope.count = attrs.count  
           console.log(attrs.caption);

           element.bind('click', function(){
             scope.count = parseInt(scope.count) + 1
             console.log(scope.count);
             scope.$apply();
           })
         }
     }
})
