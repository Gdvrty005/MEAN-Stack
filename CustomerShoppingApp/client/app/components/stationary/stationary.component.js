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
var inventory_service_1 = require("../../services/inventory_services/inventory.service");
var router_1 = require("@angular/router");
var StationaryComponent = (function () {
    function StationaryComponent(router, inventoryService) {
        var _this = this;
        this.router = router;
        this.inventoryService = inventoryService;
        this.data = {};
        this.inventoryService.getAllStationary()
            .subscribe(function (stationary) {
            _this.stationary = stationary;
        });
    }
    return StationaryComponent;
}());
StationaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-stationary',
        templateUrl: 'stationary.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        inventory_service_1.InventoryService])
], StationaryComponent);
exports.StationaryComponent = StationaryComponent;
//# sourceMappingURL=stationary.component.js.map