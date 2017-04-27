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
var task_service_1 = require("./services/task.service");
var login_service_1 = require("./services/login_services/login.service");
var home_service_1 = require("./services/home_services/home.service");
var authentication_service_1 = require("./services/authenticationService/authentication.service");
var orders_service_1 = require("./services/orders_service/orders.service");
var inventory_service_1 = require("./services/inventory_services/inventory.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AppComponent.prototype.logout = function ($event) {
        $event.preventDefault();
        this.authenticationService.logout();
        this.router.navigate(['']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [task_service_1.TaskService, login_service_1.LoginService, home_service_1.HomeService, orders_service_1.OrderService, authentication_service_1.AuthenticationService, inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map