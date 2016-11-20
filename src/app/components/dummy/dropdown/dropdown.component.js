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
var Dropdown = (function () {
    function Dropdown() {
        var _this = this;
        this.options = [];
        this.marker = "";
        this.selected = new core_1.EventEmitter();
        this.expanded = false;
        this.subscriber = this.selected.subscribe(function (type) { return _this.marker = type; });
    }
    Dropdown.prototype.ngAfterViewInit = function () {
        this.marker ?
            this.selected.emit(this.marker) :
            this.selected.emit(this.options[0]);
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    Dropdown.prototype.trigger = function () {
        this.expanded = !this.expanded;
    };
    Dropdown.prototype.select = function (target) {
        this.selected.emit(target);
        this.trigger();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Dropdown.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Dropdown.prototype, "marker", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Dropdown.prototype, "selected", void 0);
    Dropdown = __decorate([
        core_1.Component({
            selector: 'dropdown',
            styleUrls: ['./dropdown.component.less'],
            template: "\n    <div class=\"btn-group open\">\n      <a class=\"btn btn-success dropdown-toggle\" (click)=\"trigger()\">\n        {{marker}}\n        <span class=\"caret\"></span>\n      </a>\n      <ul class=\"dropdown-menu\" *ngIf=\"expanded\">\n        <li *ngFor=\"let option of options\">\n            <a [class.disabled]=\"option === marker\" (click)=\"select(option)\">\n            {{option}}\n            </a>\n        </li>\n       </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.component.js.map