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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AudioService = (function () {
    function AudioService() {
        var _this = this;
        this.audio = new Audio();
        this._volume = new BehaviorSubject_1.BehaviorSubject(1);
        this._nowPlaying = new BehaviorSubject_1.BehaviorSubject('');
        this._pause = new BehaviorSubject_1.BehaviorSubject(true);
        this._volume.subscribe(function (value) { return _this.audio.volume = value; });
    }
    Object.defineProperty(AudioService.prototype, "nowPlaying", {
        get: function () {
            return this._nowPlaying.getValue();
        },
        set: function (id) {
            this._nowPlaying.next(id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "pause", {
        get: function () {
            return this._pause.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "volume", {
        get: function () {
            return this._volume.getValue();
        },
        set: function (value) {
            this._volume.next(+(value / 100).toFixed(2));
        },
        enumerable: true,
        configurable: true
    });
    AudioService.prototype.playSong = function (url) {
        if (url)
            this.audio.src = url;
        this._pause.next(false);
        this.audio.play();
    };
    AudioService.prototype.stopSong = function () {
        this._pause.next(true);
        this.audio.pause();
    };
    AudioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AudioService);
    return AudioService;
}());
exports.AudioService = AudioService;
//# sourceMappingURL=audio.service.js.map