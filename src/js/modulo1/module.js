/* global angular */
var app = angular.module('app', [
    'ngRoute',
    //'ngTouch',
    'ngAnimate',
    'ngSanitize',
    'ngAria',
    'ngMaterial'
]);
var paginaInicial = 'pag/pag1.html';
// Controladores
app.controller('main', [function(){
    console.log('main');
}]);
app.controller('contenido', ['$routeParams', '$mdSidenav',function($routeParams, $mdSidenav){
    console.log('contenido');
    var raiz = this;
    if (paginaInicial == 'pag/pag1.html') {
        raiz.header = 'views/min-header.html';
    } else {
        raiz.header = 'views/header.html';
    }
    raiz.sidenav = 'views/sidenav.html';
    raiz.contenido = ($routeParams.pagina === undefined)?paginaInicial:'pag/pag'+$routeParams.pagina+'.html';
    raiz.toggleSidenav = function() {
        console.log('Abre sidenav');
        $mdSidenav('left').toggle();
    };
    raiz.fabAbierto = false;
    raiz.paginas = [
        {'titulo': 'Introducción'},
        {'titulo': 'Fundamentación'},
        {'titulo': 'Conclusiones'}
    ];
    raiz.numPags = creaArrayInvertida(raiz.paginas.length);
}]);
app.controller('header', ['$location', function($location){
    console.log('header');
    var raiz = this;
    raiz.paginaActual = (Number($location.path().substr(1)))?Number($location.path().substr(1)):1;
}]);
app.controller('sidenav', [function(){
    console.log('sidenav');
    var raiz = this;
}]);
// Funciones de uso genérico
function creaArrayInvertida(numero) {
    var salida = [];
    for (var i=numero;i>=1;i--) {
        salida.push(i);
    }
    return salida;
}