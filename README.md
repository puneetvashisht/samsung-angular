Javascript
    - Datatypes (primitive: number, string, boolean)
    - Objects : functions also objects
    - Functions : first-class objects, scope
    - DOM : manipulation
    - JQuery : Built in functions
    - Async programming
        : Callbacks - Results in callback hell and sharing of function
        : Promises - Better substitute to callbacks, sequential then statements
        : Async/Await - Sugar syntax for promises
NodeJS 
    - Core libraries : fs to read/write to file
    - * Most api's are async
    - External libraries using npm
    - Commands
        : npm install - Install a package
        : npm uninstall - Uninstall a package
        : npm init - Generate package.json

AngularJS
    - MVC
    - Module using ng-app
    - Controller using ng-controller (provide a unique model/$scope)
    - Model : $scope .. glue b/w controller and view  
        $rootScope: Parent of all scopes
    - View: html template {{}}, ng-model
    - Sharing using factory

Filters - Trasnformation and Filtering
    - Built in filters (currency, date, filter, uppercase, limitTo)
    - Custom filter app.filter - reverse
    - Filters are not controller ( only applied on template/view )

Directives- Custom Tags or HTML Vocab extension
    - using app.directive
    - restrict : 'AEC'
    - link function  (scope, element, attrs)
    - Isolating scopes - every directive instance to have its own data
        @ - Access read only attributes
        = - Access read/wirte on attributes
        & - reference a function from scope


DI - Configuring dependencies and getting instances

Server Side Communication
    - $http (GET, POST, DELETE)
    - different ip/port .. cors enabled
    * use cors only in dev environment

Routing
    - angular-route script
    - module injection of 'ngRoute' into 'myApp' module
    - congfigure routeProvider using when statements
    - create partials (small portion of html/view)
    - parameterized route
    - $routeParams
    - Programatic navigation


Form Validations

Angular Bootstrap

Angular New Version (2.x.x onwards)
    Install Angular CLI global (npm i -g @angular/cli)
    ng new <app-name>
    cd <app-name>
    npm start

Angular Component
    ng g c <component-name>

    Data Binding
        1. Interpolation : {{}}
        2. Property Binding: [] - @Input
        3. Event Binding: () - @Output
        4.  X Two way data binding : [()]

Angular Pipes
    ng g p <pipe-name>
    transform method from PipeTransform

Angular Service
    ng g s <service-name>
    Services by default are singleton

Http Communication

    0. Setup a fake server
        npm i -g json-server
        json-server --watch db.json --port 3000

    1. HttpClientModule in AppModule imports
    2. Inject HttpClient service in component
    3. Using http GET/POST/DELETE/PUT method