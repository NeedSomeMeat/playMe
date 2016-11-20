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
var core_1 = require('@angular/core');
var dataStorage_service_1 = require("../../services/dataStorage.service");
var router_1 = require("@angular/router");
require('rxjs/operator/switchMap');
var InfoPage = (function () {
    function InfoPage(store, route) {
        this.store = store;
        this.route = route;
        this.title = 'Info';
        this.backButton = true;
    }
    InfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.store.getStuff(params['id']); })
            .subscribe(function (object) { return _this.stuff = object; });
    };
    InfoPage = __decorate([
        core_1.Component({
            selector: 'info-page',
            template: "\n<music-block [data]=\"stuff\"></music-block>\n<scroll-content></scroll-content>\n  "
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage, router_1.ActivatedRoute])
    ], InfoPage);
    return InfoPage;
}());
exports.InfoPage = InfoPage;
//# sourceMappingURL=info.page.js.map