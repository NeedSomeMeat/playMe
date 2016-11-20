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
var album_model_1 = require("../models/album.model");
var artist_model_1 = require("../models/artist.model");
var track_model_1 = require("../models/track.model");
var musicStuff_model_1 = require("../models/musicStuff.model");
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.chooseData = function (item) {
        if (!item)
            return;
        switch (item.constructor) {
            case album_model_1.AlbumModel:
                return new musicStuff_model_1.MusicStuffModel(item.images.length ? item.images[0].url : '', item.name, item.artists);
            case artist_model_1.ArtistModel:
                return new musicStuff_model_1.MusicStuffModel(item.images.length ? item.images[0].url : '', item.name, item.genres);
            case track_model_1.TrackModel:
                return new musicStuff_model_1.MusicStuffModel(item.album.images.length ? item.album.images[0].url : '', item.name, item.artists, true);
        }
    };
    HelperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map