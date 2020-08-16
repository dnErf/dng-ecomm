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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_resolvers_brands_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/resolvers/brands.resolver */ "./src/app/core/resolvers/brands.resolver.ts");
/* harmony import */ var _core_resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/resolvers/categories.resolver */ "./src/app/core/resolvers/categories.resolver.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]
    },
    {
        path: 'shop',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-shop-shop-module */ "pages-shop-shop-module").then(__webpack_require__.bind(null, /*! ./pages/shop/shop.module */ "./src/app/pages/shop/shop.module.ts")).then(m => m.ShopModule),
        resolve: { brands: _core_resolvers_brands_resolver__WEBPACK_IMPORTED_MODULE_2__["BrandsResolver"], categories: _core_resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_3__["CategoriesResolver"] }
    },
    {
        path: 'basket',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-basket-basket-module */ "pages-basket-basket-module").then(__webpack_require__.bind(null, /*! ./pages/basket/basket.module */ "./src/app/pages/basket/basket.module.ts")).then(m => m.BasketModule)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/basket.service */ "./src/app/core/services/basket.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const basket_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", basket_r1.items.length, " ");
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
class AppComponent {
    constructor(servBasket) {
        this.servBasket = servBasket;
    }
    ngOnInit() {
        let basketId = localStorage.getItem('basket_id');
        if (basketId) {
            this.servBasket.getBasket(basketId).subscribe(() => {
                console.log('basket init');
                this.$basket = this.servBasket.$basket;
            }, (err) => console.log(err));
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 30, vars: 11, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/shop", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "d-flex", "align-items-center"], ["routerLink", "/basket", 1, "position-relative", "text-white", "mr-4"], [1, "fa", "fa-shopping-cart", "fa-lg"], ["class", "cart-no", 4, "ngIf"], [1, "d-flex", "flex-row"], ["routerLink", "/", 1, "nav-link", "text-white"], ["role", "main", 1, "mt-3", "pt-3"], [1, "cart-no"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ecomm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_21_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "main", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 5, ctx.$basket));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */", ".cart-no[_ngcontent-%COMP%] {\n    position: absolute;\n    min-height: 18px;\n    min-width: 20px;\n    border-radius: 50%;\n    font-size: .7rem;\n    background: gray;\n    color: white;\n    text-align: center;\n    top: 16px;\n    right: -8px;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_core_resolvers_brands_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/resolvers/brands.resolver */ "./src/app/core/resolvers/brands.resolver.ts");
/* harmony import */ var src_app_core_resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/resolvers/categories.resolver */ "./src/app/core/resolvers/categories.resolver.ts");
/* harmony import */ var src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/interceptors/loading.interceptor */ "./src/app/core/interceptors/loading.interceptor.ts");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/product.service */ "./src/app/core/services/product.service.ts");






// ---









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: src_app_core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoadingInterceptor"], multi: true },
        src_app_core_resolvers_brands_resolver__WEBPACK_IMPORTED_MODULE_8__["BrandsResolver"],
        src_app_core_resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolver"],
        src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"]
    ], imports: [[
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_10__["HomePage"]], imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_10__["HomePage"]
                ],
                imports: [
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"].forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: src_app_core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoadingInterceptor"], multi: true },
                    src_app_core_resolvers_brands_resolver__WEBPACK_IMPORTED_MODULE_8__["BrandsResolver"],
                    src_app_core_resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolver"],
                    src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/class/Basket.ts":
/*!****************************************!*\
  !*** ./src/app/common/class/Basket.ts ***!
  \****************************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

class Basket {
    constructor() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.items = [];
    }
}


/***/ }),

/***/ "./src/app/core/interceptors/loading.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loading.service */ "./src/app/core/services/loading.service.ts");




class LoadingInterceptor {
    constructor(servLoading) {
        this.servLoading = servLoading;
    }
    intercept(req, next) {
        this.servLoading.busy();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.servLoading.idle();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"])); };
LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/brands.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/core/resolvers/brands.resolver.ts ***!
  \***************************************************/
/*! exports provided: BrandsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsResolver", function() { return BrandsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/product.service */ "./src/app/core/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class BrandsResolver {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    resolve(route) {
        return this.productService.getBrands()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
    }
}
BrandsResolver.ɵfac = function BrandsResolver_Factory(t) { return new (t || BrandsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
BrandsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrandsResolver, factory: BrandsResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/categories.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/resolvers/categories.resolver.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesResolver", function() { return CategoriesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/product.service */ "./src/app/core/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class CategoriesResolver {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    resolve(route) {
        return this.productService.getCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
    }
}
CategoriesResolver.ɵfac = function CategoriesResolver_Factory(t) { return new (t || CategoriesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CategoriesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesResolver, factory: CategoriesResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/basket.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/basket.service.ts ***!
  \*************************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_common_class_Basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/class/Basket */ "./src/app/common/class/Basket.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



// ---




class BasketService {
    constructor(http) {
        this.http = http;
        this.basketSrc = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.basketTotalSrc = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.$basket = this.basketSrc.asObservable();
        this.$basketTotal = this.basketTotalSrc.asObservable();
    }
    getCurrentBasketValue() {
        return this.basketSrc.value;
    }
    getBasket(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/basket?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((basket) => {
            this.basketSrc.next(basket);
            this.calculateTotals();
        }));
    }
    setBasket(basket) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/basket`, basket)
            .subscribe((res) => {
            this.basketSrc.next(res);
            this.calculateTotals();
        }, (err) => {
            console.log(err);
        });
    }
    addItemToBasket(item, quantity = 1) {
        var _a;
        let itemToAdd = {
            id: item.id,
            productName: item.name,
            price: item.price,
            pictureUrl: item.pictureUrl,
            brand: item.productBrand,
            category: item.productCategory,
            quantity
        };
        let basket = (_a = this.getCurrentBasketValue()) !== null && _a !== void 0 ? _a : new src_app_common_class_Basket__WEBPACK_IMPORTED_MODULE_4__["Basket"]();
        // = if using angular 8 below
        // if (basket === null) {
        //   basket = new Basket();
        //   localStorage.setItem('basket_id', basket.id);
        // }
        localStorage.setItem('basket_id', basket.id);
        basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
        this.setBasket(basket);
    }
    incrementItemQuantity(item) {
        let basket = this.getCurrentBasketValue();
        let foundItemIndex = basket.items.findIndex((a) => a.id === item.id);
        basket.items[foundItemIndex].quantity += 1;
        this.setBasket(basket);
    }
    decrementItemQuantity(item) {
        let basket = this.getCurrentBasketValue();
        let foundItemIndex = basket.items.findIndex((a) => a.id === item.id);
        if (basket.items[foundItemIndex].quantity > 1) {
            basket.items[foundItemIndex].quantity -= 1;
            this.setBasket(basket);
        }
        else {
            this.removeItemFromBasket(item);
        }
    }
    removeItemFromBasket(item) {
        let basket = this.getCurrentBasketValue();
        if (basket.items.some(x => x.id === item.id)) {
            basket.items = basket.items.filter((a) => a.id !== item.id);
            if (basket.items.length > 0) {
                this.setBasket(basket);
            }
            else {
                this.deleteBasket(basket);
            }
        }
    }
    deleteBasket(basket) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/basket?id=${basket.id}`).subscribe(() => {
            this.basketSrc.next(null);
            this.basketTotalSrc.next(null);
            localStorage.removeItem('basket_id');
        }, (err) => {
            console.log(err);
        });
    }
    addOrUpdateItem(items, itemToAdd, quantity) {
        let index = items.findIndex((i) => i.id === itemToAdd.id);
        if (index === -1) {
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
        }
        else {
            items[index].quantity += quantity;
        }
        return items;
    }
    calculateTotals() {
        let shipping = 0;
        let basket = this.getCurrentBasketValue();
        let subtotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
        let total = subtotal + shipping;
        this.basketTotalSrc.next({ shipping, total, subtotal });
    }
}
BasketService.ɵfac = function BasketService_Factory(t) { return new (t || BasketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
BasketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BasketService, factory: BasketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/loading.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");



class LoadingService {
    constructor(servSpinner) {
        this.servSpinner = servSpinner;
        this.loadingRequestCount = 0;
    }
    busy() {
        this.loadingRequestCount += 1;
        this.servSpinner.show(undefined, {
            type: 'ball-scale',
            bdColor: 'rgba(255,255,255,0.7)',
            color: '#333333'
        });
    }
    idle() {
        this.loadingRequestCount -= 1;
        if (this.loadingRequestCount <= 0) {
            this.loadingRequestCount = 0;
            this.servSpinner.hide();
        }
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/product.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/product.service.ts ***!
  \**************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



// ---



class ProductService {
    constructor(http) {
        this.http = http;
    }
    getBrands() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/products/brands`);
    }
    getCategories() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/products/categories`);
    }
    getProducts(payload) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (payload.brandId !== 0) {
            params = params.append('brandId', payload.brandId.toString());
        }
        if (payload.categoryId !== 0) {
            params = params.append('categoryId', payload.categoryId.toString());
        }
        if (payload.search) {
            params = params.append('search', payload.search);
        }
        params = params.append('sort', payload.sort);
        params = params.append('pageIndex', payload.pageNumber.toString());
        params = params.append('pageSize', payload.pageSize.toString());
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/products`, { params, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.body));
    }
    getProduct(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/products/${id}`);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/product.service */ "./src/app/core/services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomePage_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "slide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "slide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "slide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Featured Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View details \u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Future Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Continue reading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.productBrand, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 5, ctx_r0.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx_r0.product.id, "");
} }
class HomePage {
    constructor(servProduct) {
        this.servProduct = servProduct;
    }
    ngOnInit() {
        this.servProduct.getProduct(15).subscribe((res) => {
            this.product = res;
        }, (err) => {
            console.log(err);
        });
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 1, vars: 1, consts: [["class", "py-4", 4, "ngIf"], [1, "py-4"], [1, "mt-4"], [2, "height", "450px"], ["src", "assets/images/hero1.jpg", "alt", "first slide", 2, "height", "500px", "display", "block", "width", "100%"], ["src", "assets/images/hero2.jpg", "alt", "first slide", 2, "height", "500px", "display", "block", "width", "100%"], ["src", "assets/images/hero3.jpg", "alt", "first slide", 2, "height", "500px", "display", "block", "width", "100%"], [1, "container", "py-4"], [1, "row", "mb-2"], [1, "col-md-6"], [1, "row", "no-gutters", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative"], [1, "col", "p-4", "d-flex", "flex-column", "position-static"], [1, "d-inline-block", "mb-2", "text-primary"], [1, "mb-0"], [1, "d-flex"], [1, "text-muted"], [1, "card-text", "mb-auto"], ["role", "button", 1, "btn", "btn-secondary", "mt-3", 3, "routerLink"], [1, "col-auto", "d-none", "d-lg-block"], ["width", "200", "height", "250", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", "role", "img", "aria-label", "Placeholder: Thumbnail", 1, "bd-placeholder-img"], ["width", "100%", "height", "100%", "fill", "#55595c"], ["x", "50%", "y", "50%", "fill", "#eceeef", "dy", ".3em"], [1, "col-md-6", "py-4"], ["href", "#", 1, "stretched-link"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomePage_section_0_Template, 42, 7, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["SlideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.page.html'
            }]
    }], function () { return [{ type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


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
const environment = {
    baseUrl: 'http://localhost:5000/api',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Codes\projects\ecomm\dng\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map