(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9Yz":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-editor/blog-editor.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{formTitle}}</h1>\n<hr />\n<form #myForm=\"ngForm\" (ngSubmit)=\"myForm.form.valid && saveBlogPost()\" accept-charset=\"UTF-8\" novalidate>\n    <input type=\"text\" class=\"blogHeader\" placeholder=\"Add title...\" class=\"form-control\" name=\"postTitle\"\n        [(ngModel)]=\"postData.title\" #postTitle=\"ngModel\" required>\n    <span class=\"text-danger\" *ngIf=\"myForm.submitted && postTitle.errors?.required\">Title is required</span>\n    <br />\n    <div class=\"form-group\">\n        <ckeditor name=\"myckeditor\" [config]=\"ckeConfig\" [(ngModel)]=\"postData.content\" #myckeditor=\"ngModel\"\n            debounce=\"300\" [editor]=\"Editor\"></ckeditor>\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Save</button>\n        <button type=\" button\" mat-raised-button color=\"warn\" (click)=\"cancel()\">CANCEL</button>\n    </div>\n</form>");

/***/ }),

/***/ "/Asr":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-card/blog-card.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCardComponent", function() { return BlogCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-card.component.html */ "e8bg");
/* harmony import */ var _blog_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-card.component.scss */ "XdmF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/blog.service */ "a+Xp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-emitter.service */ "Z1bl");












let BlogCardComponent = class BlogCardComponent {
    // public showLogIn: boolean = false;
    // tslint:disable-next-line: max-line-length
    constructor(eventEmitterService, blogService, snackBarService, route, authService, commentService) {
        this.eventEmitterService = eventEmitterService;
        this.blogService = blogService;
        this.snackBarService = snackBarService;
        this.route = route;
        this.authService = authService;
        this.commentService = commentService;
        this.blogPost = [];
        this.unsubscribes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.pageSizeOptions = [];
        // localStorage.setItem('logIn','true');
        //  console.log('logIn')
        // this.showLogIn = true;
        this.pageSizeOptions = [10, 20, 30, 40, 50, 100];
        const pageSize = localStorage.getItem('pageSize');
        this.config = {
            currentPage: 1,
            itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.config.currentPage = +params.pagenum;
            this.getBlogPosts();
        });
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
        this.firstComponentFunction();
    }
    firstComponentFunction() {
        this.eventEmitterService.onFirstComponentButtonClick();
    }
    ngOnDestroy() {
        this.unsubscribes$.next();
        this.unsubscribes$.complete();
    }
    getBlogPosts() {
        this.blogService.getAllPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribes$)).subscribe(result => {
            this.blogPost = result;
        });
    }
    delete(postId) {
        if (confirm('Are you sure')) {
            this.blogService.deletePost(postId).then(() => {
                this.commentService.deleteAllCommentForBlog(postId);
                this.snackBarService.showSnackBar('Blog post deleted successfully');
            });
        }
    }
    login() {
        this.authService.login();
    }
    logout() {
        this.authService.logout();
    }
};
BlogCardComponent.ctorParameters = () => [
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__["EventEmitterService"] },
    { type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"] },
    { type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_10__["CommentService"] }
];
BlogCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-card',
        template: _raw_loader_blog_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogCardComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/crystal/bile-cpa/bile-cpa/nile-cpa/src/main.ts */"zUnb");


/***/ }),

/***/ "0cSp":
/*!*************************************************************!*\
  !*** ./src/app/components/scroller/scroller.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-to-top {\n  display: block;\n  background: rgba(100, 100, 100, 0.4);\n  color: #ffffff;\n  bottom: 4%;\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  z-index: 999;\n  font-size: 24px;\n  text-align: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n}\n.scroll-to-top .fa {\n  font-weight: 900;\n}\n.scroll-to-top:hover {\n  background-color: #b2b2b2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Njcm9sbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtBQUVKO0FBQ0E7RUFDRSx5QkFBQTtBQUVGIiwiZmlsZSI6InNjcm9sbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm90dG9tOiA0JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC5mYSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxufVxuLnNjcm9sbC10by10b3A6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyO1xufVxuIl19 */");

/***/ }),

/***/ "36CD":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/scroller/scroller.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showScroller\" (click)=\"gotoTop()\" class=\"scroll-to-top\"><i class=\"fa fa-angle-up\"></i></div>");

/***/ }),

/***/ "6q0C":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe {\n  left: 0;\n  display: block;\n  /* iframes are inline by default */\n  border: none;\n  /* Reset default border */\n  height: 150vh;\n  /* Viewport-relative units */\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLGNBQUE7RUFBc0Isa0NBQUE7RUFDdEIsWUFBQTtFQUFzQix5QkFBQTtFQUN0QixhQUFBO0VBQXNCLDRCQUFBO0VBQ3RCLFdBQUE7QUFJRiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZnJhbWUge1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jazsgICAgICAgLyogaWZyYW1lcyBhcmUgaW5saW5lIGJ5IGRlZmF1bHQgKi9cbiAgYm9yZGVyOiBub25lOyAgICAgICAgIC8qIFJlc2V0IGRlZmF1bHQgYm9yZGVyICovXG4gIGhlaWdodDogMTUwdmg7ICAgICAgICAvKiBWaWV3cG9ydC1yZWxhdGl2ZSB1bml0cyAqL1xuICB3aWR0aDoxMDAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "7WK+":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("                  <iframe  [src]=\"urlSafe\" class=\"iframe\"></iframe>\n\n");

/***/ }),

/***/ "80a9":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:not([href]):not([tabindex]) {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #1565c0;\n}\n\n.comment-card-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.comment-card {\n  margin: 10px 0 15px 0;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGIiwiZmlsZSI6ImNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzE1NjVjMDtcbn1cbi5jb21tZW50LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29tbWVudC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xufVxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "AWMD":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n.navigation {\n  height: 70px;\n  background: #fff;\n}\n.nav-active {\n  color: #6bc3f0;\n}\n.nav-container {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.brand {\n  position: absolute;\n  padding-left: 20px;\n  float: left;\n  line-height: 70px;\n  text-transform: uppercase;\n  font-size: 1.4em;\n}\n.brand a,\n.brand a:visited {\n  color: #0c0c0c;\n  text-decoration: none;\n}\nnav {\n  float: right;\n}\nnav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nnav ul li {\n  font-weight: bold;\n  float: left;\n  position: relative;\n}\nnav ul li a {\n  display: block;\n  padding: 10px 20px 0 20px;\n  line-height: 50px;\n  background: #fff;\n  color: #0c0c0c;\n  text-decoration: none;\n}\nnav ul li a::before {\n  transition: 300ms;\n  height: 5px;\n  content: \"\";\n  position: absolute;\n  background-color: #6bc3f0;\n  width: 0%;\n  bottom: 0px;\n}\nnav ul li a:hover::before {\n  width: 70%;\n}\n.nav-mobile {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #fff;\n  height: 70px;\n  width: 70px;\n}\n@media only screen and (max-width: 799px) {\n  .nav-mobile {\n    display: block;\n  }\n\n  nav {\n    width: 100%;\n    padding: 70px 0 15px;\n  }\n  nav ul {\n    display: none;\n  }\n  nav ul li {\n    float: none;\n  }\n  nav ul li a {\n    padding: 15px;\n    line-height: 20px;\n  }\n  nav ul li a:hover::before {\n    width: 20%;\n  }\n  nav ul li ul li a {\n    padding-left: 30px;\n  }\n}\n#nav-toggle {\n  position: absolute;\n  left: 18px;\n  top: 22px;\n  cursor: pointer;\n  padding: 10px 35px 16px 0px;\n}\n#nav-toggle span,\n#nav-toggle span:before,\n#nav-toggle span:after {\n  cursor: pointer;\n  border-radius: 1px;\n  height: 5px;\n  width: 35px;\n  background: #6bc3f0;\n  position: absolute;\n  display: block;\n  content: \"\";\n  transition: all 300ms ease-in-out;\n}\n#nav-toggle span:before {\n  top: -10px;\n}\n#nav-toggle span:after {\n  bottom: -10px;\n}\n#nav-toggle.active span {\n  background-color: transparent;\n}\n#nav-toggle.active span:before, #nav-toggle.active span:after {\n  top: 0;\n}\n#nav-toggle.active span:before {\n  transform: rotate(45deg);\n}\n#nav-toggle.active span:after {\n  transform: rotate(-45deg);\n}\n@media screen and (min-width: 799px) {\n  .nav-list {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJRLDJFQUFBO0FBQ1I7RUFDSSxZQU5TO0VBT1QsZ0JBTmE7QUFyQmpCO0FBOEJBO0VBQ0ksY0FBQTtBQTNCSjtBQThCQTtFQUNJLGlCQWpCWTtFQWtCWixjQUFBO0FBM0JKO0FBOEJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkF2QlM7RUF3QlQseUJBQUE7RUFDQSxnQkFBQTtBQTNCSjtBQTRCSTs7RUFFSSxjQTFCUztFQTJCVCxxQkFBQTtBQTFCUjtBQThCQTtFQUNJLFlBQUE7QUEzQko7QUE0Qkk7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBMUJSO0FBMkJRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF6Qlo7QUEwQlk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQTlDQztFQStDRCxjQTlDQztFQStDRCxxQkFBQTtBQXhCaEI7QUF5QmdCO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBcEREO0VBcURDLFNBQUE7RUFDQSxXQUFBO0FBdkJwQjtBQXlCZ0I7RUFDSSxVQUFBO0FBdkJwQjtBQThCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBdkVhO0VBd0ViLFlBekVTO0VBMEVULFdBMUVTO0FBK0NiO0FBOEJBO0VBQ0k7SUFDSSxjQUFBO0VBM0JOOztFQTZCRTtJQUNJLFdBQUE7SUFDQSxvQkFBQTtFQTFCTjtFQTJCTTtJQUNJLGFBQUE7RUF6QlY7RUEwQlU7SUFDSSxXQUFBO0VBeEJkO0VBeUJjO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VBdkJsQjtFQXdCa0I7SUFDSSxVQUFBO0VBdEJ0QjtFQXlCYztJQUNJLGtCQUFBO0VBdkJsQjtBQUNGO0FBNkJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQTNCSjtBQTRCSTs7O0VBR0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFqSFc7RUFrSFgsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBMUJSO0FBNEJJO0VBQ0ksVUFBQTtBQTFCUjtBQTRCSTtFQUNJLGFBQUE7QUExQlI7QUE0Qkk7RUFDSSw2QkFBQTtBQTFCUjtBQTJCUTtFQUVJLE1BQUE7QUExQlo7QUE0QlE7RUFDSSx3QkFBQTtBQTFCWjtBQTRCUTtFQUNJLHlCQUFBO0FBMUJaO0FBK0JBO0VBQ0k7SUFDSSx5QkFBQTtFQTVCTjtBQUNGIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubmF2LWJhciB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICBjb2xvcjogIzAwMDtcbi8vICAgICBmb250LXNpemU6IDNlbTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICB6LWluZGV4OiA5OTtcbi8vIH1cbi8vIGJ1dHRvbjpmb2N1cyB7XG4vLyAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICBib3JkZXI6IDA7XG4vLyB9XG4vLyAudXNlci1hdmF0YXIge1xuLy8gICAgIGhlaWdodDogNDBweDtcbi8vICAgICB3aWR0aDogNDBweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgZmxleC1zaHJpbms6IDA7XG4vLyB9XG4vLyAuZXhhbXBsZS1zcGFjZXIge1xuLy8gICAgIGZsZXg6IDEgMSBhdXRvO1xuLy8gfVxuJGNvbnRlbnQtd2lkdGg6IDEwMDBweDtcbiRicmVha3BvaW50OiA3OTlweDtcbiRuYXYtaGVpZ2h0OiA3MHB4O1xuJG5hdi1iYWNrZ3JvdW5kOiAjZmZmO1xuJG5hdi1mb250LWNvbG9yOiAjMGMwYzBjO1xuJGxpbmstaG92ZXItY29sb3I6ICM2YmMzZjA7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XG4ubmF2aWdhdGlvbiB7XG4gICAgaGVpZ2h0OiAkbmF2LWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAkbmF2LWJhY2tncm91bmQ7XG59XG5cbi5uYXYtYWN0aXZlIHtcbiAgICBjb2xvcjogIzZiYzNmMDtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogJGNvbnRlbnQtd2lkdGg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5icmFuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogJG5hdi1oZWlnaHQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGEsXG4gICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICRuYXYtZm9udC1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cblxubmF2IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRuYXYtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG5hdi1mb250LWNvbG9yO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmF2LW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRuYXYtYmFja2dyb3VuZDtcbiAgICBoZWlnaHQ6ICRuYXYtaGVpZ2h0O1xuICAgIHdpZHRoOiAkbmF2LWhlaWdodDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgIC5uYXYtbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIG5hdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAkbmF2LWhlaWdodCAwIDE1cHg7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCBsaSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI25hdi10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxOHB4O1xuICAgIHRvcDogMjJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAzNXB4IDE2cHggMHB4O1xuICAgIHNwYW4sXG4gICAgc3BhbjpiZWZvcmUsXG4gICAgc3BhbjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICBzcGFuOmJlZm9yZSB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxuICAgIHNwYW46YWZ0ZXIge1xuICAgICAgICBib3R0b206IC0xMHB4O1xuICAgIH1cbiAgICAmLmFjdGl2ZSBzcGFuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgIC5uYXYtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "AytR":
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDmO5d5QoAOcbl1H-V4fViHfL6oXtmkqgc',
        authDomain: 'nile-blog-9be7d.firebaseapp.com',
        databaseURL: 'https://nile-blog-9be7d-default-rtdb.firebaseio.com',
        projectId: 'nile-blog-9be7d',
        storageBucket: 'nile-blog-9be7d.appspot.com',
        messagingSenderId: '1065507389884',
        appId: '1:1065507389884:web:479430601db09e92f2abb9'
    }
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

/***/ "B/H7":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-share/social-share.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><strong>Found this article helpful!!! Share this with your Friends</strong></p>\n<button mat-fab shareButton=\"facebook\" [style.backgroundColor]=\"share.prop.facebook.color\">\n    <fa-icon [icon]=\"share.prop.facebook.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"twitter\" [style.backgroundColor]=\"share.prop.twitter.color\">\n    <fa-icon [icon]=\"share.prop.twitter.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"linkedin\" [style.backgroundColor]=\"share.prop.linkedin.color\">\n    <fa-icon [icon]=\"share.prop.linkedin.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"reddit\" [style.backgroundColor]=\"share.prop.reddit.color\">\n    <fa-icon [icon]=\"share.prop.reddit.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"whatsapp\" [style.backgroundColor]=\"share.prop.whatsapp.color\">\n    <fa-icon [icon]=\"share.prop.whatsapp.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"telegram\" [style.backgroundColor]=\"share.prop.telegram.color\">\n    <fa-icon [icon]=\"share.prop.telegram.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"print\" [style.backgroundColor]=\"share.prop.print.color\">\n    <fa-icon [icon]=\"share.prop.print.icon\" size=\"lg\"></fa-icon>\n</button>\n<button mat-fab shareButton=\"email\" [style.backgroundColor]=\"share.prop.email.color\">\n    <fa-icon [icon]=\"share.prop.email.icon\" size=\"lg\"></fa-icon>\n</button>");

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "zPH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "FNOU":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor() {
        this.content = '';
    }
}


/***/ }),

/***/ "Lkgo":
/*!*********************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzb2NpYWwtc2hhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "M/g2":
/*!***************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-pagination ::ng-deep .ngx-pagination {\n  margin: 10px 0px 10px 0px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.paginator-controls {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 420px) {\n  .paginator-controls {\n    flex-direction: column-reverse;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhZ2luYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InBhZ2luYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24ge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuXG4ucGFnaW5hdG9yLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAucGFnaW5hdG9yLWNvbnRyb2xzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "MXpY":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacts.component.html */ "7WK+");
/* harmony import */ var _contacts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.component.scss */ "6q0C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let ContactsComponent = class ContactsComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = 'https://forms.clickup.com/f/25dbx-1002/3GVPYOE5Q61QL71VHG';
    }
    ngOnInit() {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
};
ContactsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
ContactsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactsComponent);



/***/ }),

/***/ "OXCg":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comments.component.html */ "zI/Y");
/* harmony import */ var _comments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.component.scss */ "80a9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_models_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/comment */ "YaP0");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");












let CommentsComponent = class CommentsComponent {
    constructor(datePipe, commentService, authService, snackBarService) {
        this.datePipe = datePipe;
        this.commentService = commentService;
        this.authService = authService;
        this.snackBarService = snackBarService;
        this.comments = new src_app_models_comment__WEBPACK_IMPORTED_MODULE_5__["Comments"]();
        this.commentList = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
        this.getAllComments();
    }
    onCommentPost(commentForm) {
        this.comments.commentDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm:ss');
        this.comments.blogId = this.blogId;
        this.commentService.saveComment(this.comments).then(commentForm.resetForm());
    }
    getAllComments() {
        this.commentService.getAllCommentsForBlog(this.blogId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribe$))
            .subscribe(result => {
            this.commentList = result;
        });
    }
    deleteComment(commentId) {
        if (confirm('Do you want to delete this comment!!!')) {
            this.commentService.deleteSingleComment(commentId).then(() => {
                this.snackBarService.showSnackBar('Comment Deleted successfully');
            });
        }
    }
    login() {
        this.authService.login();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["SnackbarService"] }
];
CommentsComponent.propDecorators = {
    blogId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comments',
        template: _raw_loader_comments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: [_comments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommentsComponent);



/***/ }),

/***/ "QuSB":
/*!*************************************************************************!*\
  !*** ./src/app/components/author-profile/author-profile.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-twitter-square {\n  color: #55acee;\n}\n\n.fa-facebook-square {\n  color: #3b5998;\n}\n\n.fa-linkedin-square {\n  color: #0976b4;\n}\n\n.fa-github-square {\n  color: #333;\n}\n\n.fa {\n  font-size: 3em;\n  width: 1em;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.mat-card-avatar {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  padding: 5px;\n}\n\n.authorimagecontainer {\n  text-align: center;\n}\n\n.rightdivtext {\n  color: #636467;\n  text-transform: uppercase;\n  padding: 2px;\n}\n\n.rightpanel-card {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dGhvci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0FBU0YiLCJmaWxlIjoiYXV0aG9yLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtdHdpdHRlci1zcXVhcmUge1xuICBjb2xvcjogIzU1YWNlZTtcbn1cbi5mYS1mYWNlYm9vay1zcXVhcmUge1xuICBjb2xvcjogIzNiNTk5ODtcbn1cbi5mYS1saW5rZWRpbi1zcXVhcmUge1xuICBjb2xvcjogIzA5NzZiNDtcbn1cbi5mYS1naXRodWItc3F1YXJlIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uZmEge1xuICBmb250LXNpemU6IDNlbTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWF0LWNhcmQtYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5hdXRob3JpbWFnZWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodGRpdnRleHQge1xuICBjb2xvcjogIzYzNjQ2NztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMnB4O1xufVxuLnJpZ2h0cGFuZWwtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "So6k":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/author-profile/author-profile.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'blogsite';
    }
    ngOnInit() {
        this.authService.appUser$.subscribe(user => {
            if (!user) {
                return;
            }
            else {
                const returnUrl = localStorage.getItem('returnUrl');
                if (!returnUrl) {
                    return;
                }
                localStorage.removeItem('returnUrl');
                this.router.navigateByUrl(returnUrl);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.appUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user) {
                return true;
            }
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
            return false;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "UXMN":
/*!***********************************************************************!*\
  !*** ./src/app/components/author-profile/author-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorProfileComponent", function() { return AuthorProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_author_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./author-profile.component.html */ "So6k");
/* harmony import */ var _author_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author-profile.component.scss */ "QuSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuthorProfileComponent = class AuthorProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthorProfileComponent.ctorParameters = () => [];
AuthorProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-author-profile',
        template: _raw_loader_author_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_author_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthorProfileComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "WOzP":
/*!*****************************************************************!*\
  !*** ./src/app/components/blog-editor/blog-editor.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditorComponent", function() { return BlogEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-editor.component.html */ "+9Yz");
/* harmony import */ var _blog_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-editor.component.scss */ "so6y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/post */ "FNOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");












let BlogEditorComponent = class BlogEditorComponent {
    constructor(route, datePipe, blogService, router, authService) {
        this.route = route;
        this.datePipe = datePipe;
        this.blogService = blogService;
        this.router = router;
        this.authService = authService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.postData = new src_app_models_post__WEBPACK_IMPORTED_MODULE_5__["Post"]();
        this.formTitle = 'Add';
        this.postId = '';
        if (this.route.snapshot.params.id) {
            this.postId = this.route.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.setEditorConfig();
        if (this.postId) {
            this.formTitle = 'Edit';
            this.blogService.getPostbyId(this.postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribe$)).subscribe(result => {
                this.setPostFormData(result);
            });
        }
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    setEditorConfig() {
        this.ckeConfig = {
            removePlugins: ['ImageUpload', 'MediaEmbed'],
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ckheading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ckheading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ckheading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ckheading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ckheading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ckheading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ckheading_heading6' },
                    { model: 'Formatted', view: 'pre', title: 'Formatted' },
                ]
            }
        };
    }
    saveBlogPost() {
        if (this.postId) {
            // If the postId is set then it means that this is an Edit request
            this.blogService.updatePost(this.postId, this.postData).then(() => {
                this.router.navigate(['/']);
            });
        }
        else {
            this.postData.createdDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
            this.postData.author = this.appUser.name;
            this.blogService.createPost(this.postData).then(() => {
                this.router.navigate(['/']);
            });
        }
    }
    setPostFormData(postFormData) {
        this.postData.title = postFormData.title;
        this.postData.content = postFormData.content;
    }
    cancel() {
        this.router.navigate(['/']);
    }
};
BlogEditorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_7__["BlogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
];
BlogEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-editor',
        template: _raw_loader_blog_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [_blog_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogEditorComponent);



/***/ }),

/***/ "XdmF":
/*!***************************************************************!*\
  !*** ./src/app/components/blog-card/blog-card.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-card {\n  margin-bottom: 15px;\n}\n\n.blog-title {\n  text-decoration: none;\n}\n\na:hover {\n  color: indianred;\n}\n\n.spinner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jsb2ctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImJsb2ctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5ibG9nLXRpdGxlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiBpbmRpYW5yZWQ7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuIl19 */");

/***/ }),

/***/ "YaP0":
/*!***********************************!*\
  !*** ./src/app/models/comment.ts ***!
  \***********************************/
/*! exports provided: Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
class Comments {
}


/***/ }),

/***/ "Z1bl":
/*!***************************************************!*\
  !*** ./src/app/services/event-emitter.service.ts ***!
  \***************************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EventEmitterService = class EventEmitterService {
    constructor() {
        this.invokeFirstComponentFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onFirstComponentButtonClick() {
        this.invokeFirstComponentFunction.emit();
    }
};
EventEmitterService.ctorParameters = () => [];
EventEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventEmitterService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-material/ng-material.module */ "otUU");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _components_blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/blog-editor/blog-editor.component */ "WOzP");
/* harmony import */ var _customPipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customPipes/excerpt.pipe */ "kF2x");
/* harmony import */ var _customPipes_slug_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customPipes/slug.pipe */ "nEA9");
/* harmony import */ var _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog-card/blog-card.component */ "/Asr");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/blog/blog.component */ "kLxQ");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "bM8H");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/admin-auth.guard */ "yMhM");
/* harmony import */ var _components_author_profile_author_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/author-profile/author-profile.component */ "UXMN");
/* harmony import */ var _components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/scroller/scroller.component */ "jng6");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/comments/comments.component */ "OXCg");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-share/core */ "/WZB");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/social-share/social-share.component */ "eMWw");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "MXpY");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/event-emitter.service */ "Z1bl");

































const customConfig = {
    twitterAccount: 'mera_naam_vvs'
};
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        // tslint:disable-next-line: max-line-length
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _components_blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_14__["BlogEditorComponent"],
            _customPipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_15__["ExcerptPipe"],
            _customPipes_slug_pipe__WEBPACK_IMPORTED_MODULE_16__["SlugPipe"],
            _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_17__["BlogCardComponent"],
            _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"],
            _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_20__["PaginatorComponent"],
            _components_author_profile_author_profile_component__WEBPACK_IMPORTED_MODULE_24__["AuthorProfileComponent"],
            _components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_25__["ScrollerComponent"],
            _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_26__["CommentsComponent"],
            _components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_30__["SocialShareComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_31__["ContactsComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_8__["NgMaterialModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"],
            _ngx_share_core__WEBPACK_IMPORTED_MODULE_27__["ShareModule"].withConfig(customConfig),
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], pathMatch: 'full' },
                { path: 'blog/:id/:slug', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"] },
                { path: 'addpost', component: _components_blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_14__["BlogEditorComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
                { path: 'editpost/:id', component: _components_blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_14__["BlogEditorComponent"], canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AdminAuthGuard"]] },
                { path: 'page/:pagenum', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_31__["ContactsComponent"] }
            ])
        ],
        providers: [_services_event_emitter_service__WEBPACK_IMPORTED_MODULE_32__["EventEmitterService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a+Xp":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let BlogService = class BlogService {
    constructor(db) {
        this.db = db;
    }
    getAllPosts() {
        const blogs = this.db.collection('blogs', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(c => (Object.assign({ postId: c.payload.doc.id }, c.payload.doc.data())));
        }));
        return blogs;
    }
    getPostbyId(id) {
        const blogDetails = this.db.doc('blogs/' + id).valueChanges();
        return blogDetails;
    }
    createPost(post) {
        const postData = JSON.parse(JSON.stringify(post));
        return this.db.collection('blogs').add(postData);
    }
    updatePost(postId, post) {
        const putData = JSON.parse(JSON.stringify(post));
        return this.db.doc('blogs/' + postId).update(putData);
    }
    deletePost(postId) {
        return this.db.doc('blogs/' + postId).delete();
    }
};
BlogService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
BlogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlogService);



/***/ }),

/***/ "bM8H":
/*!*************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.ts ***!
  \*************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paginator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paginator.component.html */ "ciWF");
/* harmony import */ var _paginator_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginator.component.scss */ "M/g2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






let PaginatorComponent = class PaginatorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    pageChange(newPage) {
        this.router.navigate(['/page/', newPage]);
    }
    changePageItemCount(selectedItem) {
        localStorage.setItem('pageSize', selectedItem.value);
        this.config.itemsPerPage = selectedItem.value;
    }
};
PaginatorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PaginatorComponent.propDecorators = {
    pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PaginatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paginator',
        template: _raw_loader_paginator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paginator_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaginatorComponent);



/***/ }),

/***/ "ciWF":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/paginator/paginator.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"paginator-controls\">\n    <div>\n        <pagination-controls (pageChange)=\"pageChange($event)\" class=\"mypagination\"></pagination-controls>\n    </div>\n    <div>\n        <mat-form-field>\n            <mat-label>Items per page: </mat-label>\n            <mat-select [(ngModel)]=\"config.itemsPerPage\" (selectionChange)=\"changePageItemCount($event)\">\n                <mat-option *ngFor=\"let page of pageSizeOptions\" [value]=\"page\">\n                    {{ page }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</div>");

/***/ }),

/***/ "e8bg":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-card/blog-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"nav-bar mat-elevation-z2\">\n  <ng-container *ngIf=\"appUser\">\n    <button mat-button [routerLinkActive]='[\"link-active\"]' [routerLink]='[\"/addpost\"]'>\n      <h6>Add Post</h6>\n    </button>\n  </ng-container>\n  <span class=\"spacer\"></span>\n  <ng-template #anonymousUser>\n    <button mat-button (click)=\"login()\">Login with Google</button>\n  </ng-template>\n  <ng-container *ngIf=\"appUser; else anonymousUser\">\n    <img mat-card-avatar class=\"user-avatar\" src={{appUser.photoURL}}>\n    <button mat-button [matMenuTriggerFor]=\"menu\">\n      {{appUser.name}}<mat-icon>arrow_drop_down</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=logout()>Logout</button>\n    </mat-menu>\n  </ng-container>\n</mat-toolbar>\n<br>\n<br>\n<br>\n\n<ng-template #emptyblog>\n    <div class=\"spinner-container\">\n        <mat-spinner></mat-spinner>\n    </div>\n</ng-template>\n<ng-container *ngIf=\"blogPost && blogPost.length > 0; else emptyblog\">\n    <div *ngFor=\"let post of blogPost | paginate:config\">\n        <mat-card class=\"flex blog-card mat-elevation-z2\">\n            <mat-card-content>\n                <a class=\"blog-title\" [routerLink]=\"['/blog/', post.postId, post.title | slug]\">\n                    <h2>{{post.title}}</h2>\n                </a>\n            </mat-card-content>\n            <mat-card-content>\n                <div  class=\"flex-column\" [innerHTML]=\"post.content | excerpt\"></div>\n            </mat-card-content>\n            <mat-divider></mat-divider>\n            <mat-card-actions align=\"end\">\n                <ng-container *ngIf=\"appUser?.isAdmin\">\n                    <button mat-raised-button color=\"accent\" [routerLink]=\"['/editpost',post.postId]\">Edit</button>\n                    <button mat-raised-button color=\"warn\" (click)=\"delete(post.postId)\">Delete</button>\n                </ng-container>\n                <span class=\"spacer\"></span>\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/blog/', post.postId, post.title | slug]\">Read\n                    More</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n    <mat-divider></mat-divider>\n</ng-container>\n<app-paginator [pageSizeOptions]=\"pageSizeOptions\" [config]=\"config\"></app-paginator>\n");

/***/ }),

/***/ "eDVs":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".docs-example-viewer-body {\n  padding: 20px;\n  align-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n\n.docs-example-viewer-wrapper {\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  margin: 1em auto;\n  background-color: #ffffff;\n}\n\n.entry-title {\n  margin: 20px;\n}\n\n.blog-info {\n  margin: 15px 20px 10px;\n  align-content: center;\n  align-items: center;\n}\n\n.blog-info .fa-user {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0Esc0VBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsaUJBQUE7QUFFSiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3MtZXhhbXBsZS12aWV3ZXItYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZG9jcy1leGFtcGxlLXZpZXdlci13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZW50cnktdGl0bGUge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5ibG9nLWluZm8ge1xuICBtYXJnaW46IDE1cHggMjBweCAxMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5mYS11c2VyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "eMWw":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocialShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShareComponent", function() { return SocialShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_social_share_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./social-share.component.html */ "B/H7");
/* harmony import */ var _social_share_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-share.component.scss */ "Lkgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var src_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/icons */ "idfh");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-share/core */ "/WZB");







let SocialShareComponent = class SocialShareComponent {
    constructor(library, share) {
        this.share = share;
        library.addIcons(...src_icons__WEBPACK_IMPORTED_MODULE_5__["iconpack"]);
    }
    ngOnInit() {
    }
};
SocialShareComponent.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"] },
    { type: _ngx_share_core__WEBPACK_IMPORTED_MODULE_6__["ShareService"] }
];
SocialShareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-social-share',
        template: _raw_loader_social_share_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_social_share_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SocialShareComponent);



/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "zP2R");
/* harmony import */ var _nav_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.component.scss */ "AWMD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/event-emitter.service */ "Z1bl");






let NavBarComponent = class NavBarComponent {
    constructor(authService, eventEmitterService) {
        this.authService = authService;
        this.eventEmitterService = eventEmitterService;
        this.showLogIn = false;
    }
    ngOnInit() {
        $(function () {
            // Toggle open and close nav styles on click
            $('#nav-toggle').click(function () {
                $('nav ul').slideToggle();
            });
            $('#nav-toggle').on('click', function () {
                this.classList.toggle('active');
            });
        });
        if (this.eventEmitterService.subsVar === undefined) {
            this.eventEmitterService.subsVar = this.eventEmitterService.
                invokeFirstComponentFunction.subscribe((name) => {
                this.setTrue();
            });
        }
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    }
    setTrue() {
        this.showLogIn = true;
    }
    setFalse() {
        this.showLogIn = false;
    }
    login() {
        this.authService.login();
    }
    logout() {
        this.authService.logout();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
];
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-bar',
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavBarComponent);



/***/ }),

/***/ "hNrJ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"docs-example-viewer-wrapper\">\n    <h1 class=\"entry-title\">{{postData.title}}</h1>\n    <mat-card-subtitle class=\"blog-info\">\n        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{postData.createdDate | date:'longDate'}}\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{postData.author}}\n    </mat-card-subtitle>\n    <mat-divider></mat-divider>\n    <div class=\"docs-example-viewer-body\">\n        <div [innerHTML]=\"postData.content\">\n        </div>\n    </div>\n</div>\n\n<!-- <app-social-share></app-social-share> -->\n<mat-divider></mat-divider>\n<app-comments [blogId]=\"postId\"></app-comments>\n<app-scroller></app-scroller>");

/***/ }),

/***/ "idfh":
/*!**********************!*\
  !*** ./src/icons.ts ***!
  \**********************/
/*! exports provided: iconpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconpack", function() { return iconpack; });
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTelegramPlane */ "1453");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookF */ "CjTo");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "a/oV");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faRedditAlien */ "SVIv");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "fRy2");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faWhatsapp */ "aeqR");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPrint */ "jedd");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEnvelope */ "0smN");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_7__);








const iconpack = [
    _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"], _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"], _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__["faRedditAlien"],
    _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_0__["faTelegramPlane"], _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_5__["faWhatsapp"], _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"], _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_6__["faPrint"]
];


/***/ }),

/***/ "jng6":
/*!***********************************************************!*\
  !*** ./src/app/components/scroller/scroller.component.ts ***!
  \***********************************************************/
/*! exports provided: ScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_scroller_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./scroller.component.html */ "36CD");
/* harmony import */ var _scroller_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroller.component.scss */ "0cSp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ScrollerComponent = class ScrollerComponent {
    constructor() {
        this.showScrollerPosition = 100;
    }
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.showScrollerPosition) {
            this.showScroller = true;
        }
        else {
            this.showScroller = false;
        }
    }
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
};
ScrollerComponent.propDecorators = {
    checkScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:scroll',] }]
};
ScrollerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scroller',
        template: _raw_loader_scroller_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scroller_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ScrollerComponent);



/***/ }),

/***/ "kF2x":
/*!*********************************************!*\
  !*** ./src/app/customPipes/excerpt.pipe.ts ***!
  \*********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ExcerptPipe = class ExcerptPipe {
    // This pipe will accept the contents of the blog as a string and return the first 300 characters as
    // the summary of the blog. Since the content of the blog is in HTML format, we will remove
    // all the HTML tags before extracting the summary.
    transform(content) {
        const postSummary = content.replace(/(<([^>]+)>)/ig, '');
        if (postSummary.length > 300) {
            return postSummary.substr(0, 300) + ' [...]';
        }
        else {
            return postSummary;
        }
    }
};
ExcerptPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'excerpt'
    })
], ExcerptPipe);



/***/ }),

/***/ "kLxQ":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog.component.html */ "hNrJ");
/* harmony import */ var _blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component.scss */ "eDVs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/post */ "FNOU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/blog.service */ "a+Xp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");










let BlogComponent = class BlogComponent {
    constructor(route, blogService, commentService) {
        this.route = route;
        this.blogService = blogService;
        this.commentService = commentService;
        this.postData = new src_app_models_post__WEBPACK_IMPORTED_MODULE_4__["Post"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.showLogIn = false;
        if (this.route.snapshot.params.id) {
            this.postId = this.route.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.blogService.getPostbyId(this.postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.postData = result;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"] },
    { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_9__["CommentService"] }
];
BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog',
        template: _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogComponent);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");








let AuthService = class AuthService {
    constructor(afAuth, route, router, db) {
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.db = db;
        this.appUser$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(user => {
            if (user) {
                return this.db.doc(`appusers/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    updateUserData(user) {
        const userRef = this.db.doc(`appusers/${user.uid}`);
        const data = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
            localStorage.setItem('returnUrl', returnUrl);
            const credential = yield this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
            return this.updateUserData(credential.user);
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut().then(() => {
                this.router.navigate(['/']);
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "mxDV":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let CommentService = class CommentService {
    constructor(db) {
        this.db = db;
    }
    saveComment(comment) {
        const commentData = JSON.parse(JSON.stringify(comment));
        return this.db.collection('comments').add(commentData);
    }
    getAllCommentsForBlog(blogId) {
        const comments = this.db.collection('comments', ref => ref.where('blogId', '==', blogId).orderBy('commentDate', 'desc')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(c => (Object.assign({ commentId: c.payload.doc.id }, c.payload.doc.data())));
        }));
        return comments;
    }
    deleteAllCommentForBlog(blogId) {
        const commentsToDelete = this.db.collection('comments', ref => ref.where('blogId', '==', blogId)).snapshotChanges();
        commentsToDelete.forEach(commentList => {
            commentList.forEach(comment => {
                this.db.doc('comments/' + comment.payload.doc.id).delete();
            });
        });
    }
    deleteSingleComment(commentId) {
        return this.db.doc('comments/' + commentId).delete();
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentService);



/***/ }),

/***/ "nEA9":
/*!******************************************!*\
  !*** ./src/app/customPipes/slug.pipe.ts ***!
  \******************************************/
/*! exports provided: SlugPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugPipe", function() { return SlugPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let SlugPipe = class SlugPipe {
    // This pipe will accept the title of the blog and return the title as a URL slug.We will replace
    // the white space character between the words in the title with a ‘-’ character to create the URL
    // slug.
    transform(title) {
        const urlSlug = title.trim().toLowerCase().replace(/ /g, '-');
        return urlSlug;
    }
};
SlugPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'slug'
    })
], SlugPipe);



/***/ }),

/***/ "otUU":
/*!***************************************************!*\
  !*** ./src/app/ng-material/ng-material.module.ts ***!
  \***************************************************/
/*! exports provided: NgMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function() { return NgMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Xlwt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "MSSf");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "3uU/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "TY1r");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "1OTw");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "G/Ji");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "0DX0");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "J0hL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "gVAx");














let NgMaterialModule = class NgMaterialModule {
};
NgMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        ]
    })
], NgMaterialModule);



/***/ }),

/***/ "p20J":
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "0DX0");



let SnackbarService = class SnackbarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showSnackBar(message) {
        this.snackBar.open(message, 'Close', {
            duration: 2000,
            panelClass: 'snackbar-ribon',
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    }
};
SnackbarService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackbarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SnackbarService);



/***/ }),

/***/ "so6y":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-editor/blog-editor.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ck-editor__editable {\n  max-height: 350px;\n  min-height: 350px;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\nblockquote {\n  display: block;\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\nimg {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jsb2ctZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJibG9nLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay1lZGl0b3JfX2VkaXRhYmxlIHtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuXG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOS41cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjMzMzO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgZm9udC1zaXplOiAxNy41cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2VlZTtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row left-panel\">\n    <div class=\"col-md-9\">\n        <app-blog-card></app-blog-card>\n    </div>\n    <div class=\"col-md-3\">\n        <app-author-profile></app-author-profile>\n    </div>\n</div>");

/***/ }),

/***/ "yMhM":
/*!********************************************!*\
  !*** ./src/app/guards/admin-auth.guard.ts ***!
  \********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AdminAuthGuard = class AdminAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.appUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            if (user && user.isAdmin) {
                return true;
            }
            this.router.navigate(['/'], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }));
    }
};
AdminAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AdminAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminAuthGuard);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zI/Y":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #anonymousUser>\n    <mat-card class=\"comment-card mat-elevation-z2\">\n        <a (click)=\"login()\">Login with Google</a> to post comments\n    </mat-card>\n</ng-template>\n<mat-card *ngIf=\"appUser; else anonymousUser\" class=\"comment-card mat-elevation-z2\">\n    <mat-card-title>\n        LEAVE A REPLY\n    </mat-card-title>\n    <mat-card-subtitle>\n        Your email address will not be published. Required fields are marked *\n    </mat-card-subtitle>\n    <mat-card-content>\n        <form #commentForm=\"ngForm\" (ngSubmit)=\"commentForm.form.valid && onCommentPost(commentForm)\" novalidate>\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Name\" name=\"commentedBy\" [(ngModel)]=\"comments.commentedBy\"\n                    #commentedBy=\"ngModel\" required>\n                <mat-error *ngIf=\"commentForm.submitted && commentedBy.errors?.required\">Name is required</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"comments.email\" #email=\"ngModel\" email\n                    required>\n                <mat-error *ngIf=\"commentForm.submitted && email.errors?.required\">Email is required</mat-error>\n                <mat-error *ngIf=\"commentForm.submitted && email.errors?.email\">Invalid email</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width\">\n                <textarea matInput placeholder=\"Comment\" name=\"content\" [(ngModel)]=\"comments.content\"\n                    #content=\"ngModel\" required></textarea>\n                <mat-error *ngIf=\"commentForm.submitted && content.errors?.required\">Comment is required</mat-error>\n            </mat-form-field>\n            <mat-card-actions>\n                <button type=\"\n    submit\" mat-raised-button color=\"primary\">Post Comment</button>\n            </mat-card-actions>\n        </form>\n    </mat-card-content>\n</mat-card>\n<mat-card *ngFor=\"let comment of commentList\" class=\"comment-card mat-elevation-z2\">\n    <mat-card-title>\n        <div class=\"comment-card-title\">\n            <div>\n                {{comment.commentedBy}}\n            </div>\n            <div *ngIf=\"appUser?.isAdmin\">\n                <button mat-icon-button matTooltip=\"Delete comment\" matTooltipPosition=\"before\" color=\"accent\"\n                    (click)=\"deleteComment(comment.commentId)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n        </div>\n    </mat-card-title>\n    <mat-card-subtitle>{{comment.commentDate | date:'medium'}}</mat-card-subtitle>\n    <mat-card-content>\n        <p>{{comment.content}}</p>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "zP2R":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"navigation\">\n    <div class=\"nav-container\">\n        <div class=\"brand\">\n            <a href=\"http://nilecpa.com/\"><img src=\"../../../assets/images/nile-logo.jpeg\" alt=\"\" srcset=\"\"></a>\n        </div>\n        <nav>\n            <div class=\"nav-mobile\">\n                <a id=\"nav-toggle\"><span></span></a>\n            </div>\n            <ul class=\"nav-list\">\n                <li><a href=\"http://nilecpa.com/\">HOME</a></li>\n                <li>\n                    <a href=\"http://nilecpa.com/services.html\">SERVICES</a>\n\n                </li>\n                <li><a href=\"http://nilecpa.com/about-us.html\">ABOUT US</a></li>\n\n                <li>\n                    <a href=\"#\"><span class=\"nav-active \">BLOG</span></a></li>\n                <li><a href=\"http://nilecpa.com/contact-us.html\">CONTACT</a></li>\n            </ul>\n        </nav>\n\n    </div>\n</section>\n\n\n\n<!-- <script>\n    (function($) {\n      \n    })\n</script> -->\n\n<!--<mat-toolbar class=\"nav-bar mat-elevation-z2 \" [hidden]=\"showLogIn==f alse \">-->\n<!--    <ng-container *ngIf=\"appUser \">-->\n<!--        <button mat-button [routerLinkActive]='[\"link-active \"]' [routerLink]='[\"/addpost \"]'>-->\n<!--            <h6>Add Post</h6>-->\n<!--        </button>-->\n<!--    </ng-container>-->\n<!--    <span class=\"spacer \"></span>-->\n<!--    <ng-template #anonymousUser>-->\n<!--        <button mat-button (click)=\"login() \">Login with Google</button>-->\n<!--    </ng-template>-->\n<!--    <ng-container *ngIf=\"appUser; else anonymousUser \">-->\n<!--        <img mat-card-avatar class=\"user-avatar \" src={{appUser.photoURL}}>-->\n<!--        <button mat-button [matMenuTriggerFor]=\"menu \">-->\n<!--            {{appUser.name}}<mat-icon>arrow_drop_down</mat-icon>-->\n<!--        </button>-->\n<!--        <mat-menu #menu=\"matMenu \">-->\n<!--            <button mat-menu-item (click)=logout()>Logout</button>-->\n<!--        </mat-menu>-->\n<!--    </ng-container>-->\n<!--</mat-toolbar>-->\n\n<script src=\"../../../assets/js/nav.js \"></script>");

/***/ }),

/***/ "zPH0":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-panel {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map