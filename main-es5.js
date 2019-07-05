(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Teste</h1>\n\n<app-pessoas-listagem></app-pessoas-listagem>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem-pessoas/listagem-pessoas.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem-pessoas/listagem-pessoas.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>listagem-pessoas works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pessoas-listagem/pessoas-listagem.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pessoas-listagem/pessoas-listagem.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\n</head>\n\n<body>\n\n    <h2>Cadastro </h2>\n    <hr>\n\n    <form>\n        <div class=\"descricaoCampo\">\n            <div class=\"margem\">\n                <label for=\"id\"> #Id</label>\n                <input type=\"text\" name=\"id\" [(ngModel)]=\"pessoa.id\" autofocus>\n                <label for=\"nome\"> Nome</label>\n                <input type=\"text\" name=\"nome\" [(ngModel)]=\"pessoa.nome\">\n                <label for=\"sexo\"> Sexo</label>\n                <input type=\"text\" name=\"sexo\" [(ngModel)]=\"pessoa.sexo\">\n                <label for=\"datanascimento\"> Data de nascimento</label>\n                <input type=\"date\" name=\"datanascimento\" [(ngModel)]=\"pessoa.datanascimento\">\n\n            </div>\n\n        </div>\n        <div class=\"descricaoCampo\">\n            <div class=\"margemBotao\">\n                <button type=\"submit\" class=\"btn btn-dark\" (click)=\"cadastrar()\">Cadastrar/Alterar</button>\n            </div>\n        </div>\n        \n\n    </form>\n\n    <h2>Listagem de pessoas</h2>\n    <hr>\n    <table class=\"table\">\n        <tr>\n            <th>#Id</th>\n            <th>Nome</th>\n            <th>Sexo</th>\n            <th>Data de nascimento</th>\n            <th>Ações</th>\n        </tr>\n        <tr *ngFor=\"let p of pessoas\">\n            <td>{{p.id}}</td>\n            <td>{{p.nome}}</td>\n            <td>{{p.sexo}}</td>\n            <td>{{p.datanascimento}}</td>\n            <td><button class=\"btn btn-dark\" (click)=\"remover(p.id)\">Remover</button></td>\n        </tr>\n\n    </table>\n\n</body>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'crud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _listagem_pessoas_listagem_pessoas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listagem-pessoas/listagem-pessoas.component */ "./src/app/listagem-pessoas/listagem-pessoas.component.ts");
/* harmony import */ var _pessoas_listagem_pessoas_listagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pessoas-listagem/pessoas-listagem.component */ "./src/app/pessoas-listagem/pessoas-listagem.component.ts");
/* harmony import */ var _pessoa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pessoa.service */ "./src/app/pessoa.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _listagem_pessoas_listagem_pessoas_component__WEBPACK_IMPORTED_MODULE_6__["ListagemPessoasComponent"],
                _pessoas_listagem_pessoas_listagem_component__WEBPACK_IMPORTED_MODULE_7__["PessoasListagemComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _pessoa_service__WEBPACK_IMPORTED_MODULE_8__["PessoaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/listagem-pessoas/listagem-pessoas.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/listagem-pessoas/listagem-pessoas.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhZ2VtLXBlc3NvYXMvbGlzdGFnZW0tcGVzc29hcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/listagem-pessoas/listagem-pessoas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/listagem-pessoas/listagem-pessoas.component.ts ***!
  \****************************************************************/
/*! exports provided: ListagemPessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemPessoasComponent", function() { return ListagemPessoasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListagemPessoasComponent = /** @class */ (function () {
    function ListagemPessoasComponent() {
    }
    ListagemPessoasComponent.prototype.ngOnInit = function () {
    };
    ListagemPessoasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listagem-pessoas',
            template: __webpack_require__(/*! raw-loader!./listagem-pessoas.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem-pessoas/listagem-pessoas.component.html"),
            styles: [__webpack_require__(/*! ./listagem-pessoas.component.css */ "./src/app/listagem-pessoas/listagem-pessoas.component.css")]
        })
    ], ListagemPessoasComponent);
    return ListagemPessoasComponent;
}());



/***/ }),

/***/ "./src/app/pessoa.service.ts":
/*!***********************************!*\
  !*** ./src/app/pessoa.service.ts ***!
  \***********************************/
/*! exports provided: PessoaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaService", function() { return PessoaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PessoaService = /** @class */ (function () {
    function PessoaService(http) {
        this.http = http;
        this.pessoaUrl = 'http://apresentacaomatheus.herokuapp.com/webresources/pessoa/getAll/';
    }
    PessoaService.prototype.listar = function () {
        return this.http.get("" + this.pessoaUrl);
    };
    PessoaService.prototype.cadastrarPessoa = function (pessoa) {
        var RegExp = /["|']/g;
        pessoa.datanascimento = JSON.stringify(new Date(pessoa.datanascimento));
        pessoa.datanascimento = pessoa.datanascimento.replace(RegExp, "");
        // const data = JSON.stringify( new Date(pessoa.datanascimento))
        // const pessoaTeste = {
        //   'id': pessoa.id,
        //   'nome': pessoa.nome,
        //   'sexo': pessoa.sexo,
        //   'datanascimento': data.replace(RegExp,"")
        // };
        return this.http.post("http://apresentacaomatheus.herokuapp.com/webresources/pessoa/save/", pessoa);
    };
    PessoaService.prototype.removerPessoa = function (id) {
        return this.http.delete("http://apresentacaomatheus.herokuapp.com/webresources/pessoa/delete/".concat(id));
    };
    PessoaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PessoaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PessoaService);
    return PessoaService;
}());



/***/ }),

/***/ "./src/app/pessoas-listagem/pessoa-model.ts":
/*!**************************************************!*\
  !*** ./src/app/pessoas-listagem/pessoa-model.ts ***!
  \**************************************************/
/*! exports provided: pessoaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pessoaModel", function() { return pessoaModel; });
var pessoaModel = /** @class */ (function () {
    function pessoaModel() {
    }
    return pessoaModel;
}());



/***/ }),

/***/ "./src/app/pessoas-listagem/pessoas-listagem.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pessoas-listagem/pessoas-listagem.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 80%;\r\n\r\n}\r\n\r\n.descricaoCampo {\r\n    width: 100%;        \r\n    margin-right: auto;\r\n    margin-left: auto;\r\n\r\n}\r\n\r\n.elementoImput {\r\n    width: 80%;\r\n    float: left;\r\n}\r\n\r\nlabel {\r\n    padding: 1%;\r\n}\r\n\r\n.margem {\r\n    width: 70%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n\r\n}\r\n\r\n.margemBotao {\r\n    margin-top: 10px;\r\n    width: 10%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nbutton {\r\n    align-content: center;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVzc29hcy1saXN0YWdlbS9wZXNzb2FzLWxpc3RhZ2VtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjs7QUFFekIiLCJmaWxlIjoic3JjL2FwcC9wZXNzb2FzLWxpc3RhZ2VtL3Blc3NvYXMtbGlzdGFnZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuXHJcbn1cclxuXHJcbi5kZXNjcmljYW9DYW1wbyB7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG59XHJcblxyXG4uZWxlbWVudG9JbXB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ubWFyZ2VtIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5tYXJnZW1Cb3RhbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pessoas-listagem/pessoas-listagem.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pessoas-listagem/pessoas-listagem.component.ts ***!
  \****************************************************************/
/*! exports provided: PessoasListagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasListagemComponent", function() { return PessoasListagemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pessoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pessoa.service */ "./src/app/pessoa.service.ts");
/* harmony import */ var _pessoa_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pessoa-model */ "./src/app/pessoas-listagem/pessoa-model.ts");




var PessoasListagemComponent = /** @class */ (function () {
    function PessoasListagemComponent(pessoaService) {
        this.pessoaService = pessoaService;
        this.pessoa = new _pessoa_model__WEBPACK_IMPORTED_MODULE_3__["pessoaModel"]();
    }
    PessoasListagemComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    PessoasListagemComponent.prototype.cadastrar = function () {
        var _this = this;
        console.log(this.pessoa);
        this.pessoaService.cadastrarPessoa(this.pessoa).subscribe(function (pessoa) {
            _this.pessoa = new _pessoa_model__WEBPACK_IMPORTED_MODULE_3__["pessoaModel"]();
            _this.listar();
        }, function (err) {
            console.log('Erro ao cadastrar o aluno', err);
        });
    };
    PessoasListagemComponent.prototype.listar = function () {
        var _this = this;
        this.pessoaService.listar().subscribe(function (dados) { return _this.pessoas = dados; });
    };
    PessoasListagemComponent.prototype.remover = function (id) {
        var _this = this;
        this.pessoaService.removerPessoa(id).subscribe(function () {
            _this.pessoa = new _pessoa_model__WEBPACK_IMPORTED_MODULE_3__["pessoaModel"]();
            _this.listar();
        }, function (err) {
            console.log('Erro ao cadastrar o aluno', err);
        });
    };
    PessoasListagemComponent.ctorParameters = function () { return [
        { type: _pessoa_service__WEBPACK_IMPORTED_MODULE_2__["PessoaService"] }
    ]; };
    PessoasListagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pessoas-listagem',
            template: __webpack_require__(/*! raw-loader!./pessoas-listagem.component.html */ "./node_modules/raw-loader/index.js!./src/app/pessoas-listagem/pessoas-listagem.component.html"),
            styles: [__webpack_require__(/*! ./pessoas-listagem.component.css */ "./src/app/pessoas-listagem/pessoas-listagem.component.css")]
        })
    ], PessoasListagemComponent);
    return PessoasListagemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\victo\OneDrive\Área de Trabalho\CRUD\crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map