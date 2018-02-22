(function () {
    var yike = angular.module("yike",["ngRoute","masterCtrl"]);
    yike.config(["$routeProvider",function ($routeProvider) {

        M.navAry.forEach(function (value) {
            $routeProvider.when("/"+value.title,{    //   ②如果是/today#/abc 或者是 /today#abc那么会触发when,并不会触发otherwise
                controller: value.title + "Ctrl",
                templateUrl: "view/" + value.title + ".html"
            });
        });
        $routeProvider.otherwise({
            redirectTo: "/"+ M.navAry[0].title //  ①   如果是/today/abc会触发otherwise
        });
        
        /*M.callback = function () {      //使用监听者模式,如果调用有延时(如在定时器内或者$http.success内)都会出bug，如果调用没有延时则可以正常运行;
            M.navAry.forEach(function (value) {
                $routeProvider.when("/"+value.title,{
                    controller: value.title + "Ctrl",
                    templateUrl: "view/" + value.title + ".html"
                });
            });
            $routeProvider.otherwise({
                redirectTo: "/"+ M.navAry[0].title
            });
        };*/

    }]);

    yike.run(["$rootScope",function ($rootScope) {
        requestAnimationFrame(function () {
            document.querySelector(".wrapper .container .header .hamburger").style.transform = "translateY(0)";
        });
        var flag = true;
        var listAry = null;
        $rootScope.collapsed = false;
        $rootScope.toggle = function () {
            if(flag){
                listAry = [].slice.call(document.querySelectorAll(".wrapper .navbar .nav .list"));
                flag = false;
            };
            if($rootScope.collapsed){
                $rootScope.collapsed = false;
                listAry.forEach(function (value,i) {
                    value.style.delay = "0.2s";
                    value.style.transitionDuration = (i + 1) * 0.15 + "s";
                    value.style.transform = "translate(0)";
                });
            }else{
                $rootScope.collapsed = true;
                listAry.forEach(function (value,i) {
                    value.style.delay = "0s";
                    value.style.transitionDuration = (listAry.length - 0.5 - i) * 0.15 + "s";
                    value.style.transform = "translate(-100%)";
                });
            };
        };
    }]);

    
    
}());