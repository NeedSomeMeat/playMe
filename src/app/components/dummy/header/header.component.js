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
var common_1 = require('@angular/common');
var Header = (function () {
    function Header(location) {
        this.location = location;
        this.btnClicked = new core_1.EventEmitter();
    }
    Header.prototype.onBtnClick = function () {
        this.btnClicked.emit();
    };
    Header.prototype.doCheck = function () {
        return this.backButton;
    };
    Header.prototype.goBack = function () {
        if (!this.backButton)
            return;
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Header.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Header.prototype, "backButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Header.prototype, "button", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Header.prototype, "btnClicked", void 0);
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            styleUrls: ['./header.component.less'],
            template: "\n<div class=\"header-block\">\n    <div class=\"header-button back\" (click)=\"goBack()\">\n        <span *ngIf=\"doCheck()\" class=\"glyphicon glyphicon-chevron-left\"></span>\n    </div>\n    <h1>{{title}}</h1>\n    <div class=\"header-button search\">\n        <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\" (click)=\"onBtnClick()\"></span>\n    </div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.component.js.map