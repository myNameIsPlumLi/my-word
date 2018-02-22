(function () {
    var masterCtrl = angular.module("masterCtrl",[]);
    // master.config([function (){
    //     alert(1111111111);         //由于一刻模块依赖masterCtrl的注入，因此master config优先于yike config的执行;
    // }]);
    masterCtrl.controller("navCtrl",["$scope","$http","$interval",function ($scope,$http,$interval) {
        // alert(111111111); //一刻模块依赖masterCtrl的注入，因此master配置运行优先于yike配置运行，但是两个模块的contrller执行还是取决于代码顺序;
        $scope.navAry = M.navAry;
        $scope.styleAry = M.styleAry;
        -function (array) {
            var docSheet = document.styleSheets[document.styleSheets.length-1];
            array.forEach(function (value) {
                var index = docSheet.cssRules.length;
                var string = array.base + "." + value.selector + "{" + value.css + "}";
                docSheet.insertRule(string,index);
            });
        }($scope.styleAry);
        console.log(document.querySelectorAll(".wrapper .navbar .nav .list a")); /*html中的ng功能的执行要比controller中的回调函数要慢;*/
        var loaded = function () {
            return document.querySelectorAll(".wrapper .navbar .nav .list a").length >= $scope.navAry.length;
        };
        loaded.handler = function (aAry) {
            var index = null;
            aAry.every(function (v,i) {
                if(v.href == location.href){
                    index = i;
                    return false;
                }else{
                    index = 0;
                    return true;
                }
            });
            $scope.order = index;
            var medium = aAry[index];
            medium.className += " active";
            $scope.click = function (i) {
                $scope.order = i;
            };
        };
        var timer = setInterval(function () {
            if(loaded()){
                clearInterval(timer);
                loaded.handler([].slice.call(document.querySelectorAll(".wrapper .navbar .nav .list a")));
            };
        },16.7);
        /*$timeout(function () { //定时器内或者$http.success内调用$routeProvider.when，会出现bug;
            console.log(123);
            M.callback();
        },16.7);*/
    }])
    .controller("todayCtrl",["$routeParams","$scope","$http",function ($routeParams,$scope,$http) {
        console.log(11111);
        console.log($routeParams);
    }])
    .controller("olderCtrl",["$routeParams","$scope",function ($routeParams,$scope) {
        console.log(22222);
        console.log($routeParams);
    }])
    .controller("authorCtrl",["$routeParams","$scope","$http","$rootScope",function ($routeParams,$scope,$http,$rootScope) {
        $rootScope.loaded = false;
        $http.get("api/author.php?")
        .success(function (info) {
            $rootScope.loaded = true;
            $scope.rec = info;
            console.log(info);
        });
        console.log(33333);
        console.log($routeParams);
    }])
    .controller("categoryCtrl",["$routeParams","$scope",function ($routeParams,$scope) {
        console.log(44444);
        console.log($routeParams);
    }])
    .controller("favouriteCtrl",["$routeParams","$scope",function ($routeParams,$scope) {
        console.log(55555);
        console.log($routeParams);
    }])
    .controller("settingCtrl",["$routeParams","$scope",function ($routeParams,$scope) {
        console.log(66666);
        console.log($routeParams);
    }]);
}());