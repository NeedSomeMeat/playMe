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
var album_model_1 = require("../../../models/album.model");
var artist_model_1 = require("../../../models/artist.model");
var track_model_1 = require("../../../models/track.model");
var MusicStuffContainer = (function () {
    function MusicStuffContainer() {
    }
    MusicStuffContainer.prototype.chooseData = function (item) {
        switch (item.constructor) {
            case album_model_1.AlbumModel:
                return {
                    img: item.images.length ? item.images[0].url : '',
                    name: item.name,
                    subName: item.artists
                };
            case artist_model_1.ArtistModel:
                return {
                    img: item.images.length ? item.images[0].url : '',
                    name: item.name,
                    subName: item.genres
                };
            case track_model_1.TrackModel:
                return {
                    img: item.album.images.length ? item.album.images[0].url : '',
                    name: item.name,
                    subName: item.artists
                };
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MusicStuffContainer.prototype, "data", void 0);
    MusicStuffContainer = __decorate([
        core_1.Component({
            selector: 'music-stuff-container',
            styleUrls: ['./musicStuffContainer.component.less'],
            template: "\n<div class=\"music-stuff-container\">\n  <music-stuff *ngFor=\"let stuff of data\" [params]=\"chooseData(stuff)\"></music-stuff>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MusicStuffContainer);
    return MusicStuffContainer;
}());
exports.MusicStuffContainer = MusicStuffContainer;
//# sourceMappingURL=musicStuffContainer.component.js.map