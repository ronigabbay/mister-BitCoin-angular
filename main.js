(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+k4k":
/*!******************************************************!*\
  !*** ./src/app/signup-page/signup-page.component.ts ***!
  \******************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/userService */ "8XoP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignupPageComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    onSignup(ev) {
        ev.preventDefault();
        console.log(this.name);
        this.userService.signup(this.name);
        this.router.navigateByUrl('');
    }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) { return new (t || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupPageComponent, selectors: [["signup-page"]], decls: 6, vars: 1, consts: [["className", "signUp-form align-center justify-center flex col"], ["htmlFor", "name", 1, "signup-label"], ["type", "text", "name", "name", "placeholder", "Enter Your Name", 3, "ngModel", "ngModelChange"], [1, "signup-btn", 3, "click"]], template: function SignupPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please entar your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_4_listener($event) { return ctx.onSignup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'signup-page',
                templateUrl: './signup-page.component.html',
                styleUrls: ['./signup-page.component.scss']
            }]
    }], function () { return [{ type: _services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hadasroni\Desktop\dev\angular\‏‏‏‏Mister-Bitcoin-day125 - toGitub\Mister-Bitcoin\src\main.ts */"zUnb");


/***/ }),

/***/ "4d0O":
/*!**************************************************************!*\
  !*** ./src/app/contact-preview/contact-preview.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactPreviewComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this.contact);
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["contact-preview"]], inputs: { contact: "contact" }, decls: 6, vars: 3, consts: [[1, "conact-preview", "flex", "align-center"], [1, "contact-img", 3, "src"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://robohash.org/" + ctx.contact._id + "?set=set5", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contact.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.phone);
    } }, styles: [".conact-preview[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 20px;\n  background-color: gray;\n  width: 100%;\n  color: white;\n  margin: 3px;\n}\n\n.conact-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.contact-img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-left: 50px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFHbkIsc0JBQXNCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBRVosV0FBVztBQUZoQjs7QUFQQTtFQVlTLGlCQUFnQjtBQUR6Qjs7QUFLQztFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBRnZCIiwiZmlsZSI6ImNvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25hY3QtcHJldmlldyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjMjtcclxuICAgIC8vIHdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgbWFyZ2luOiAzcHg7XHJcblxyXG4gICAgIHAge1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gLmNvbnRhY3QtaW1ne1xyXG4gICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuIH1cclxuICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-preview',
                templateUrl: './contact-preview.component.html',
                styleUrls: ['./contact-preview.component.scss']
            }]
    }], function () { return []; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7zx5":
/*!****************************************************!*\
  !*** ./src/app/moves-list/moves-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovesListComponent", function() { return MovesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MovesListComponent_li_1_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", move_r1.to, " ");
} }
function MovesListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovesListComponent_li_1_h3_1_Template, 2, 1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("At: ", move_r1.at, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Amount: ", move_r1.amount, " ");
} }
class MovesListComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.user.moves);
        if (this.contact) {
            this.userMoves = this.user.moves;
            const userMoves = this.user.moves;
            const currUserMoves = userMoves.filter(move => move.toId === this.contact._id);
            console.log(currUserMoves);
            this.userMoves = currUserMoves;
        }
        else {
            this.userMoves = this.user.moves;
            const lastMoves = [];
            if (this.user.moves) {
                for (var i = 0; i < this.user.moves.length; i++) {
                    lastMoves.push(this.user.moves[i]);
                    if (lastMoves.length > 2) {
                        this.userMoves = lastMoves;
                        return;
                    }
                    else {
                        this.userMoves = lastMoves;
                    }
                }
            }
        }
    }
}
MovesListComponent.ɵfac = function MovesListComponent_Factory(t) { return new (t || MovesListComponent)(); };
MovesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovesListComponent, selectors: [["moves-list"]], inputs: { user: "user", contact: "contact" }, decls: 2, vars: 1, consts: [[1, "move-list"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function MovesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovesListComponent_li_1_Template, 6, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userMoves);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3Zlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'moves-list',
                templateUrl: './moves-list.component.html',
                styleUrls: ['./moves-list.component.scss']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8XoP":
/*!*************************************!*\
  !*** ./src/services/userService.ts ***!
  \*************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



const KEY = 'userDb';
class UserService {
    constructor() {
        this.user = { name: 'Ochoa Hyde', coins: 100, moves: [] };
    }
    getUser() {
        var user = this._loadFromStorage(KEY);
        // if (!user) user = this.user 
        return user;
    }
    signup(name) {
        var user = {
            name: name,
            coins: 100,
            moves: [],
            _id: this._makeId(),
            imgUrl: `https://robohash.org/${name}?set=set5`
        };
        this._storeToStorage(KEY, user);
        return user;
    }
    logout() {
        localStorage.clear();
    }
    addMove(contact, amount) {
        return {
            toId: contact._id,
            to: contact.name,
            at: moment__WEBPACK_IMPORTED_MODULE_1__(new Date).format('MMMM Do YYYY'),
            amount: amount
        };
    }
    saveUser(user) {
        this._storeToStorage(KEY, user);
        // _updateUser(user)
    }
    // public _updateUser(user) {
    //   const userIdx = gUsers.findIndex(currUser => currUser._id === user._id)
    //   if (userIdx !== -1) {
    //       gUsers.splice(userIdx, 1, user)
    //       localStorage.setItem('users', JSON.stringify(gUsers))
    //   }
    // }
    _storeToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value) || null);
    }
    _loadFromStorage(key) {
        let data = localStorage.getItem(key);
        return (data) ? JSON.parse(data) : undefined;
    }
    _makeId(length = 5) {
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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

/***/ "Bho8":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-google-charts */ "icpI");




function ChartComponent_google_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "google-chart", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("data", ctx_r0.data)("columns", ctx_r0.columns);
} }
class ChartComponent {
    constructor() {
        this.type = 'LineChart';
    }
    // columns = [1, 4, 5, 7, 3, 10]
    ngOnInit() {
        // console.log(this.confirmedTransactions);
        // console.log(this.marketPrice);
        console.log('this.data:', this.data);
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["chart"]], inputs: { data: "data", columns: "columns" }, decls: 2, vars: 1, consts: [["style", "width: 80%;", 3, "type", "data", "columns", 4, "ngIf"], [2, "width", "80%", 3, "type", "data", "columns"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartComponent_google_chart_1_Template, 1, 3, "google-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "D+/P":
/*!****************************************!*\
  !*** ./src/services/bitcoinService.ts ***!
  \****************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
// import axios from 'axios';



class BitcoinService {
    constructor(http) {
        this.http = http;
    }
    getRate() {
        return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
    }
    getMarketPrice() {
        var marketPrice = this.http.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`);
        return marketPrice;
    }
    getConfirmedTransactions() {
        var confirmedTransactions = this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`);
        return confirmedTransactions;
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitcoinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "G7xH":
/*!**********************************************************!*\
  !*** ./src/app/transfer-fund/transfer-fund.component.ts ***!
  \**********************************************************/
/*! exports provided: TransferFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFundComponent", function() { return TransferFundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/userService */ "8XoP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class TransferFundComponent {
    constructor(userService) {
        this.userService = userService;
        this.user = null;
        this.amount = null;
    }
    ngOnInit() {
        this.user = this.userService.getUser();
        console.log(this.user);
    }
    onTransfer(ev) {
        ev.preventDefault();
        if (this.amount <= this.user.coins) {
            this.user.coins -= this.amount;
            this.user.moves.push(this.userService.addMove(this.contact, this.amount));
            this.userService.saveUser(this.user);
            this.amount = null;
        }
    }
}
TransferFundComponent.ɵfac = function TransferFundComponent_Factory(t) { return new (t || TransferFundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
TransferFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFundComponent, selectors: [["transfer-fund"]], inputs: { contact: "contact" }, decls: 7, vars: 1, consts: [["type", "number", "name", "amount", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function TransferFundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferFundComponent_Template_input_ngModelChange_4_listener($event) { return ctx.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferFundComponent_Template_button_click_5_listener($event) { return ctx.onTransfer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Zlci1mdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferFundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transfer-fund',
                templateUrl: './transfer-fund.component.html',
                styleUrls: ['./transfer-fund.component.scss']
            }]
    }], function () { return [{ type: _services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JTEF":
/*!**************************************************!*\
  !*** ./src/app/Home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bitcoinService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/bitcoinService */ "D+/P");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/userService */ "8XoP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moves-list/moves-list.component */ "7zx5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HomePageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomePageComponent {
    constructor(bitcoinService, userService, router) {
        this.bitcoinService = bitcoinService;
        this.userService = userService;
        this.router = router;
        this.rate = null;
    }
    ngOnInit() {
        this.bitcoinService.getRate().subscribe((rate) => {
            this.rate = 1 / rate;
        });
        this.user = this.userService.getUser();
    }
    logout() {
        this.userService.logout();
        this.router.navigateByUrl('signup');
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bitcoinService__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["home-page"]], decls: 9, vars: 5, consts: [[1, "home-page"], [3, "user"], [3, "click", 4, "ngIf"], [3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "moves-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePageComponent_button_8_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx.user.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins ", ctx.user.coins, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bitcoin Rate: ", ctx.rate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_4__["MovesListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _services_bitcoinService__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"] }, { type: _services_userService__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Koxp":
/*!****************************************!*\
  !*** ./src/services/contactService.ts ***!
  \****************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_models_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/models/contact */ "RPWk");




const CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181"
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629"
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812"
    }
];
class ContactService {
    constructor() {
        //mock the server
        this._contacts = CONTACTS;
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
    }
    loadContacts(filterBy = null) {
        let contacts = this._contacts;
        if (filterBy && filterBy.term) {
            contacts = this._filter(contacts, filterBy.term);
        }
        this._contacts$.next(this._sort(contacts));
    }
    getContactById(id) {
        //mock the server work
        const contact = this._contacts.find(contact => contact._id === id);
        //return an observable
        return contact ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact) : rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(`Contact id ${id} not found!`);
    }
    remove(id) {
        //mock the server work
        this._contacts = this._contacts.filter(contact => contact._id !== id);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._contacts);
    }
    save(contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    _updateContact(contact) {
        //mock the server work
        this._contacts = this._contacts.map(c => contact._id === c._id ? contact : c);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(this._contacts));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact);
    }
    _addContact(contact) {
        //mock the server work
        const newContact = new _app_models_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"](undefined, contact.name, contact.email, contact.phone);
        // newContact.setId();
        const id = this._makeId();
        newContact._id = id;
        this._contacts.push(newContact);
        this._contacts$.next(this._sort(this._contacts));
        console.log(newContact);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(newContact);
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    getEmptyContact() {
        return { name: '', email: '', phone: '' };
    }
    _filter(contacts, term) {
        term = term.toLocaleLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
    _makeId(length = 5) {
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NfFs":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/userService */ "8XoP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return { exact: true }; };
class AppHeaderComponent {
    // @Input() user:any
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 5, vars: 2, consts: [[1, "app-header"], ["routerLink", "", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "contact"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".app-header[_ngcontent-%COMP%] {\n  background-color: #b8b8fa;\n  padding: 15px 30px;\n}\n\n.app-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: em(20px);\n}\n\n.app-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFFekIsa0JBQWtCO0FBQXRCOztBQUhBO0VBS1EsbUJBQW1CO0FBRTNCOztBQVBBO0VBUVEsaUJBQWlCO0FBR3pCOztBQUNBO0VBQ0ksaUJBQWlCO0FBRXJCIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGI4ZmE7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICYgPiAqIHtcclxuICAgICAgICBmb250LXNpemU6IGVtKDIwcHgpXHJcbiAgICB9XHJcbiAgICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './app-header.component.html',
                styleUrls: ['./app-header.component.scss']
            }]
    }], function () { return [{ type: _services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "PDNx":
/*!************************************************************!*\
  !*** ./src/app/contact-filter/contact-filter.component.ts ***!
  \************************************************************/
/*! exports provided: ContactFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function() { return ContactFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contactService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/contactService */ "Koxp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ContactFilterComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.setFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterBy = {
            term: ''
        };
    }
    ngOnInit() {
    }
}
ContactFilterComponent.ɵfac = function ContactFilterComponent_Factory(t) { return new (t || ContactFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactService__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFilterComponent, selectors: [["contact-filter"]], outputs: { setFilter: "setFilter" }, decls: 2, vars: 1, consts: [[1, "contact-filter"], ["type", "text", "name", "term", "placeholder", "Search a contact..", 1, "input", 3, "ngModel", "ngModelChange", "input"]], template: function ContactFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterBy.term = $event; })("input", function ContactFilterComponent_Template_input_input_1_listener() { return ctx.setFilter.emit(ctx.filterBy); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.term);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".contact-filter[_ngcontent-%COMP%] {\n  color: white;\n  padding: 5px;\n}\n\n.contact-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  padding: 6px;\n  width: 300px;\n  text-align: center;\n  background-color: #d4d2df;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtFQUNaLFlBQVk7QUFBaEI7O0FBSEE7RUFLTyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQW9DO0FBRTNDIiwiZmlsZSI6ImNvbnRhY3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZmlsdGVyIHtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGlucHV0IHtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTAsIDIyMyk7XHJcbiAgICAgXHJcbiAgICB9XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-filter',
                templateUrl: './contact-filter.component.html',
                styleUrls: ['./contact-filter.component.scss']
            }]
    }], function () { return [{ type: _services_contactService__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, { setFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "RPWk":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    constructor(_id, name = '', email = '', phone = '') {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    setId() {
        // Implement your own set Id
        // this._id = makeId()
    }
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SHIl":
/*!************************************************************!*\
  !*** ./src/app/statistic-page/statistic-page.component.ts ***!
  \************************************************************/
/*! exports provided: StatisticPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticPageComponent", function() { return StatisticPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bitcoinService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/bitcoinService */ "D+/P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chart/chart.component */ "Bho8");





function StatisticPageComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "market price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Confirmed Transactions Per Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.marketPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.confirmedTransactions);
} }
class StatisticPageComponent {
    constructor(bitcoinService) {
        this.bitcoinService = bitcoinService;
        this.marketPrice = null;
        this.confirmedTransactions = null;
    }
    ngOnInit() {
        this.loadMarketPrice();
        this.loadConfirmedTransactions();
    }
    loadMarketPrice() {
        this.bitcoinService.getMarketPrice().subscribe((marketPrice) => {
            this.marketPrice = this.convertData(marketPrice);
            // this.marketPrice = marketPrice.values
            // console.log(this.marketPrice);
        });
    }
    loadConfirmedTransactions() {
        this.bitcoinService.getConfirmedTransactions().subscribe((confirmedTransactions) => {
            this.confirmedTransactions = this.convertData(confirmedTransactions);
            // console.log(confirmedTransactions.values);
            // this.confirmedTransactions = confirmedTransactions.values
        });
    }
    convertData(data) {
        console.log(data);
        const newData = data.values.slice(130, 150);
        const convertData = newData.map(value => {
            // console.log(value.y);
            // const newDate = new Date(value.y * 140000000)
            const newDate = new Date();
            // console.log(newDate);
            // let date = moment(newDate).format('YYYY-MM-DD')
            // return [date, value.x]
            return [value.y, value.x];
        });
        return convertData;
    }
}
StatisticPageComponent.ɵfac = function StatisticPageComponent_Factory(t) { return new (t || StatisticPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bitcoinService__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"])); };
StatisticPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticPageComponent, selectors: [["statistic-page"]], decls: 1, vars: 1, consts: [["class", "statistic-page", 4, "ngIf"], [1, "statistic-page"], [3, "data"]], template: function StatisticPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StatisticPageComponent_section_0_Template, 7, 2, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marketPrice && ctx.confirmedTransactions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'statistic-page',
                templateUrl: './statistic-page.component.html',
                styleUrls: ['./statistic-page.component.scss']
            }]
    }], function () { return [{ type: _services_bitcoinService__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/userService */ "8XoP");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header/app-header.component */ "NfFs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(userService) {
        this.userService = userService;
        this.title = 'Mister-Bitcoin';
    }
    ngOnInit() {
        this.user = this.userService.getUser();
        console.log(this.user);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/userService */ "8XoP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        const user = this.userService.getUser();
        if (user) {
            return true;
        }
        else {
            this.router.navigate(['signup']);
            ///////the same////////
            // this.router.navigateByUrl('signup');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_userService__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home-page/home-page.component */ "JTEF");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "kGaf");
/* harmony import */ var _contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-details-page/contact-details-page.component */ "fWy7");
/* harmony import */ var _statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistic-page/statistic-page.component */ "SHIl");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "h49d");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-preview/contact-preview.component */ "4d0O");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart/chart.component */ "Bho8");
/* harmony import */ var _contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-filter/contact-filter.component */ "PDNx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-header/app-header.component */ "NfFs");
/* harmony import */ var _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact-edit/contact-edit.component */ "gmXa");
/* harmony import */ var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signup-page/signup-page.component */ "+k4k");
/* harmony import */ var _transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transfer-fund/transfer-fund.component */ "G7xH");
/* harmony import */ var _moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./moves-list/moves-list.component */ "7zx5");





















// import { ChartsModule } from 'ng2-charts';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_14__["GoogleChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _Home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
        _contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailsPageComponent"],
        _statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_8__["StatisticPageComponent"],
        _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["ContactListComponent"],
        _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_10__["ContactPreviewComponent"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"],
        _contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_12__["ContactFilterComponent"],
        _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_15__["AppHeaderComponent"],
        _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_16__["ContactEditComponent"],
        _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_17__["SignupPageComponent"],
        _transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_18__["TransferFundComponent"],
        _moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_19__["MovesListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_14__["GoogleChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _Home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                    _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
                    _contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailsPageComponent"],
                    _statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_8__["StatisticPageComponent"],
                    _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["ContactListComponent"],
                    _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_10__["ContactPreviewComponent"],
                    _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"],
                    _contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_12__["ContactFilterComponent"],
                    _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_15__["AppHeaderComponent"],
                    _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_16__["ContactEditComponent"],
                    _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_17__["SignupPageComponent"],
                    _transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_18__["TransferFundComponent"],
                    _moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_19__["MovesListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_14__["GoogleChartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fWy7":
/*!************************************************************************!*\
  !*** ./src/app/contact-details-page/contact-details-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsPageComponent", function() { return ContactDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_contactService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/contactService */ "Koxp");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/userService */ "8XoP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transfer-fund/transfer-fund.component */ "G7xH");
/* harmony import */ var _moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moves-list/moves-list.component */ "7zx5");








function ContactDetailsPageComponent_section_0_moves_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "moves-list", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", ctx_r1.contact)("user", ctx_r1.user);
} }
function ContactDetailsPageComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsPageComponent_section_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Edit Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "transfer-fund", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactDetailsPageComponent_section_0_moves_list_11_Template, 1, 2, "moves-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.contact.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://robohash.org/" + ctx_r0.contact._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contact.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", ctx_r0.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user);
} }
class ContactDetailsPageComponent {
    constructor(route, router, contactService, userService) {
        this.route = route;
        this.router = router;
        this.contactService = contactService;
        this.userService = userService;
    }
    ngOnInit() {
        this.route.params.subscribe(data => {
            console.log(data.id);
            this.slectedContactId = data.id;
            // this.contact = data.contact
        });
        this.contactService.getContactById(this.slectedContactId).subscribe((cotact) => {
            this.contact = cotact;
        });
        this.user = this.userService.getUser();
        // this.userMoves = this.user.moves
        console.log(this.user.moves);
        // console.log(this.user.moves);
    }
    goBack() {
        console.log('back');
        this.router.navigateByUrl(`contact`);
    }
}
ContactDetailsPageComponent.ɵfac = function ContactDetailsPageComponent_Factory(t) { return new (t || ContactDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactService__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
ContactDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsPageComponent, selectors: [["contact-details-page"]], decls: 1, vars: 1, consts: [["class", "contact-details", 4, "ngIf"], [1, "contact-details"], [3, "src"], [3, "click"], ["routerLink", "edit"], [3, "contact"], ["title", "Your Moves", 3, "contact", "user", 4, "ngIf"], ["title", "Your Moves", 3, "contact", "user"]], template: function ContactDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactDetailsPageComponent_section_0_Template, 12, 5, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_5__["TransferFundComponent"], _moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_6__["MovesListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-details-page',
                templateUrl: './contact-details-page.component.html',
                styleUrls: ['./contact-details-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_contactService__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _services_userService__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "gmXa":
/*!********************************************************!*\
  !*** ./src/app/contact-edit/contact-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_contactService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contactService */ "Koxp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ContactEditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ContactEditComponent_form_1_Template_form_submit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.addContact($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_form_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.contact.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_form_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.contact.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_form_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.contact.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Save Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contact.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contact.email);
} }
class ContactEditComponent {
    constructor(route, router, contactService) {
        this.route = route;
        this.router = router;
        this.contactService = contactService;
    }
    ngOnInit() {
        // console.log();
        this.route.params.subscribe(data => {
            console.log(data.id);
            this.loadContact(data.id);
        });
    }
    loadContact(id) {
        if (id) {
            const contact$ = this.contactService.getContactById(id);
            console.log(contact$);
            contact$.subscribe(contact => {
                this.contact = contact;
            });
        }
        else
            this.contact = this.contactService.getEmptyContact();
    }
    addContact(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ev.preventDefault();
            if (!this.contact.name)
                return;
            console.log(this.contact);
            this.contactService.save(this.contact).subscribe(() => {
                this.contact = this.contactService.getEmptyContact();
            });
            this.router.navigateByUrl(`contact`);
        });
    }
    removeContact() {
        this.contactService.remove(this.contact._id);
        this.router.navigateByUrl(`contact`);
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contactService__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["contact-edit"]], decls: 4, vars: 1, consts: [[3, "submit", 4, "ngIf"], [3, "click"], [3, "submit"], ["name", "name", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "phone", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", 3, "ngModel", "ngModelChange"]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactEditComponent_form_1_Template, 6, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactEditComponent_Template_button_click_2_listener() { return ctx.removeContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'contact-edit',
                templateUrl: './contact-edit.component.html',
                styleUrls: ['./contact-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_contactService__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "h49d":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "4d0O");





const _c0 = function (a0) { return [a0]; };
function ContactListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "contact-preview", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, contact_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor() { }
    ngOnInit() {
        //  console.log(this.contacts);
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], inputs: { contacts: "contacts" }, decls: 2, vars: 1, consts: [[1, "contact-list", "clean-list", "flex", "wrap", "justify-center"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [3, "routerLink"], [3, "contact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_li_1_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_3__["ContactPreviewComponent"]], styles: [".contact-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFGQTtFQUdRLFVBQVU7QUFHbEIiLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtbGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGl7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kGaf":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contactService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/contactService */ "Koxp");
/* harmony import */ var _contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-filter/contact-filter.component */ "PDNx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact-list/contact-list.component */ "h49d");






class ContactPageComponent {
    // contactId: string = null
    constructor(contactService) {
        this.contactService = contactService;
        this.contacts = [];
    }
    ngOnInit() {
        this.subscription = this.contactService.contacts$.subscribe(cotacts => {
            this.contacts = [...cotacts];
        });
        this.contactService.loadContacts();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setFilter(filterBy) {
        console.log('filterBy:', filterBy);
        this.contactService.loadContacts(filterBy);
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactService__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["contact-page"]], decls: 5, vars: 1, consts: [[1, "contact-page", "flex", "col", "align-center"], [3, "setFilter"], ["routerLink", "edit"], [3, "contacts"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "contact-filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setFilter", function ContactPageComponent_Template_contact_filter_setFilter_1_listener($event) { return ctx.setFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "contact-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts);
    } }, directives: [_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_2__["ContactFilterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"]], styles: [".btn-section[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-top: 15px;\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  width: 33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7QUFBcEI7O0FBR0E7RUFDSSxXQUFXO0FBQWYiLCJmaWxlIjoiY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idG4tc2VjdGlvbntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYWRkLWJ0bntcclxuICAgIHdpZHRoOiAzM3B4O1xyXG59ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return [{ type: _services_contactService__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home-page/home-page.component */ "JTEF");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "kGaf");
/* harmony import */ var _statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistic-page/statistic-page.component */ "SHIl");
/* harmony import */ var _contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-details-page/contact-details-page.component */ "fWy7");
/* harmony import */ var _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-edit/contact-edit.component */ "gmXa");
/* harmony import */ var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-page/signup-page.component */ "+k4k");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");











const routes = [
    { path: '', component: _Home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'contact/:id/edit', component: _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"] },
    { path: 'contact/edit', component: _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"] },
    { path: 'contact/:id', component: _contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailsPageComponent"] },
    { path: 'contact', component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPageComponent"] },
    { path: 'statistic', component: _statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_4__["StatisticPageComponent"] },
    { path: 'signup', component: _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"] }
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map