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
var actionButton = (function () {
    function actionButton() {
        this.clicked = new core_1.EventEmitter();
    }
    actionButton.prototype.onClick = function () {
        this.clicked.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], actionButton.prototype, "icon", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], actionButton.prototype, "clicked", void 0);
    actionButton = __decorate([
        core_1.Component({
            selector: 'action-button',
            styleUrls: ['./actionButton.component.less'],
            template: "\n<div (click)=\"onClick()\">\n      <span class=\"play glyphicon glyphicon-play\" aria-hidden=\"true\"></span>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], actionButton);
    return actionButton;
}());
exports.actionButton = actionButton;
//# sourceMappingURL=actionButton.component.js.map