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
var router_1 = require("@angular/router");
var helper_service_1 = require("../../../services/helper.service");
var MusicStuffContainer = (function () {
    function MusicStuffContainer(router, helper) {
        this.router = router;
        this.helper = helper;
    }
    MusicStuffContainer.prototype.goToInfo = function (_a) {
        var type = _a.type, id = _a.id;
        this.router.navigate([("/" + type), id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MusicStuffContainer.prototype, "data", void 0);
    MusicStuffContainer = __decorate([
        core_1.Component({
            selector: 'music-stuff-container',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./musicStuffContainer.component.less'],
            template: "\n<div class=\"music-stuff-container\">\n  <music-stuff *ngFor=\"let stuff of data\" [params]=\"helper.chooseData(stuff)\" (clicked)=\"goToInfo(stuff)\"></music-stuff>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, helper_service_1.HelperService])
    ], MusicStuffContainer);
    return MusicStuffContainer;
}());
exports.MusicStuffContainer = MusicStuffContainer;
//# sourceMappingURL=musicStuffContainer.component.js.map