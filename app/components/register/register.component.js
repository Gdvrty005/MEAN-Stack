"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("../../services/login_services/login.service");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.data = {
            uname: String,
            pswd: String,
            gender: String,
            mailId: String,
            city: String,
            address: [
                {
                    apt_No: String,
                    city: String,
                    state: String,
                    ziCode: String
                }
            ]
        };
    }
    RegisterComponent.prototype.formSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var newCustomer = {
            name: this.data.uname,
            password: this.data.pswd,
            gender: this.data.gender,
            email: this.data.mailId,
            city: this.data.city,
            loginId: this.data.uname,
            address: [
                {
                    apt_No: this.data.address[0].apt_No,
                    state: this.data.address[0].city,
                    city: this.data.address[0].state,
                    ziCode: this.data.address[0].ziCode,
                }
            ]
        };
        this.loginService.addCustomer(newCustomer)
            .subscribe(function (data) {
            console.log('Customer', data);
            //this.data = data;
        }, function (error) { return console.log(_this.data); }, function () { return console.log('Get Item complete'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-register',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        login_service_1.LoginService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map