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
var Header = (function () {
    function Header() {
        this.btnClicked = new core_1.EventEmitter();
    }
    Header.prototype.onBtnClick = function () {
        this.btnClicked.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Header.prototype, "title", void 0);
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
            styleUrls: ['./header.component.css'],
            template: "\n<div class=\"header-block\">\n    <h1>{{title}}</h1>\n    <div class=\"header-button\">\n        <button *ngIf=\"button\" type=\"button\" class=\"btn btn-primary\" (click)=\"onBtnClick()\">\n            {{button}}\n        </button>\n    </div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.component.js.map