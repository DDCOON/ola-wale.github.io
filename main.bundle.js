webpackJsonp([2,5],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.stuff = [
            {
                name: 'Gifr', subtitle: 'extracts an mp4 from gifs.com without the watermark using web scraping and converts it back to .gif using ffmpeg', link: 'http://dev.owale.co/gifr/', images: ['/assets/images/gifr1.jpg']
            },
            {
                name: 'Poke(test?)', subtitle: 'Index of Pokemons cross-referenced with their stats and item\'s held using PokeApi.co', link: 'http://dev.owale.co/poketest/', images: ['/assets/images/pk1.jpg', '/assets/images/pk2.jpg', '/assets/images/pk3.jpg']
            },
            {
                name: 'appeal', subtitle: 'WordPress Blog Theme', link: 'https://themeforest.net/item/appeal-a-news-blog-shop-wordpress-theme/17355806', images: ['/assets/images/1.png']
            },
            {
                name: 'June', subtitle: 'Personal AngularJs Template', link: 'http://owale.co/June', images: ['/assets/images/june.jpg']
            },
            {
                name: 'Typewrite.js', subtitle: 'Javascript Library', link: 'http://ola-wale.github.io/typewritejs', images: []
            },
            {
                name: 'BitBay-Sell-Bot', subtitle: 'BitBay Bitcoin Trading Bot', link: 'https://github.com/ola-wale/BitBay-Sell-Bot', images: []
            },
            {
                name: 'The Future Web', subtitle: 'WordPress Blog Theme similar to TheNextWeb\'s', link: 'http://owale.co/tfw/demo', images: ['/assets/images/tfw.JPG']
            },
            {
                name: 'Note8', subtitle: 'Angularjs Note App (school project :/)', link: 'http://dev.owale.co/note8', images: ['/assets/images/n81.jpg', '/assets/images/n82.jpg', '/assets/images/n83.jpg', '/assets/images/n84.jpg']
            },
        ];
        this.age = new Date().getFullYear() - 1998;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(676),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=C:/wamp64/www/site/src/main.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/wamp64/www/site/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(675),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/wamp64/www/site/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_owl_carousel__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_owl_carousel__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_8_ng2_owl_carousel__["OwlModule"],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/wamp64/www/site/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */] }
];
//# sourceMappingURL=C:/wamp64/www/site/src/app.routes.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/wamp64/www/site/src/environment.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "header {\n  background: #5837fd;\n  background: linear-gradient(150deg, #5837fd 15%, #02cff9 70%, #a1fcc7 94%);\n  color: white; }\n  header #avatar {\n    width: 88px;\n    box-shadow: 0 3px 1px 1px rgba(0, 0, 0, 0.19);\n    border-radius: 100%; }\n  header > div {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n  header h1 {\n    font-weight: 100;\n    margin-bottom: 19px; }\n  header h5 {\n    font-weight: 400; }\n  header p {\n    margin-top: 23px; }\n\n#main {\n  margin-top: -31px; }\n  #main .card {\n    background-color: white;\n    padding: 15px 29px;\n    border-radius: 14px 0;\n    box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1); }\n    #main .card a {\n      text-decoration: none !important; }\n      #main .card a:hover {\n        opacity: 0.8; }\n    #main .card h5 {\n      color: #434d70;\n      text-transform: uppercase; }\n    #main .card i {\n      color: #c0c5d5; }\n    #main .card ul {\n      padding: 0;\n      list-style: none; }\n      #main .card ul li {\n        position: relative;\n        margin-bottom: 20px; }\n        #main .card ul li:last-child {\n          margin-bottom: 0; }\n        #main .card ul li > i {\n          position: absolute;\n          top: 4px;\n          font-size: 16px; }\n        #main .card ul li > div {\n          display: inline-block;\n          vertical-align: text-bottom;\n          margin-left: 29px; }\n          #main .card ul li > div b {\n            color: #434d70; }\n          #main .card ul li > div a {\n            color: #03A9F4; }\n    #main .card .ctnt {\n      margin-top: 25px; }\n\n.stuff {\n  margin-bottom: 30px; }\n\n.works .card {\n  margin-bottom: 33px; }\n  .works .card h5 {\n    display: inline-block;\n    font-family: Poppins;\n    font-weight: 600;\n    font-size: 20px; }\n    .works .card h5 + i {\n      vertical-align: top;\n      margin-left: 7px; }\n  .works .card .gall {\n    margin-top: 20px;\n    margin-left: -29px;\n    margin-right: -29px;\n    border-radius: 0 0 14px 0;\n    margin-bottom: -15px; }\n    .works .card .gall .img {\n      border-radius: 0 0 14px 0;\n      overflow: hidden; }\n      .works .card .gall .img img {\n        width: 100%;\n        max-height: 300px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        -o-object-position: 0 0;\n           object-position: 0 0; }\n\n@media (max-width: 768px) {\n  .contact {\n    margin-bottom: 20px; } }\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t<img id=\"avatar\" src=\"https://instagram.flhr5-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/19436346_109454779681484_5362652150960750592_n.jpg\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t<h1>Wale Morenigbade</h1>\r\n\t\t\t\t<div class=\"bio\">\r\n\t\t\t\t\t<h5><b>Born:  </b> Feb 14, 1998  ({{age}})</h5>\r\n\t\t\t\t\t<h5><b>Nationality:  </b> Nigerian</h5>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tI'm a Front-End Developer & a senior at the University of Lodz. I stand on a sweet spot where design & code intersects.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n\r\n<div id=\"main\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t<div class=\"stuff card\">\r\n\t\t\t\t\t<h5>stuff</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"works\">\r\n\t\t\t\t\t<div *ngFor=\"let item of stuff\" class=\"card\">\r\n\t\t\t\t\t\t<a target=\"_blank\" href=\"{{item.link}}\"><h5>{{item.name}}</h5> <i class=\"ti-new-window\"></i></a>\r\n\t\t\t\t\t\t<small class=\"show\">\r\n\t\t\t\t\t\t{{item.subtitle}}\r\n\t\t\t\t\t</small>\r\n\t\t\t\t\t\t<div class=\"gall\">\r\n\t\t\t\t\t\t\t<owl-carousel *ngIf=\"item.images.length > 1\" [options]=\"{items: 3, dots: true, nav: true,navText: ['<i class=ti-angle-left></i>','<i class=ti-angle-right></i>']}\" [carouselClasses]=\"['owl-theme', 'sliding']\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let image of item.images\">\r\n\t\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"{{image}}\"><img alt=\"{{item.name}}\" src=\"{{image}}\" /></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</owl-carousel>\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.images.length == 1\" class=\"img\">\r\n\t\t\t\t\t\t\t\t<img alt=\"{{item.name}}\" src=\"{{item.images[0]}}\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"contact\" class=\"col-sm-4\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<h5>Contact & Personal info</h5>\r\n\t\t\t\t\t<div class=\"ctnt\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<i class=\"ti-download\"></i>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<b>Email</b> <br />\r\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:obfuscated@owale.co\">obfuscated@owale.co</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<i class=\"ti-link\"></i>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<b>Web page:</b> <br />\r\n\t\t\t\t\t\t\t\t\t<a>You're already here</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[701]);
//# sourceMappingURL=main.bundle.map