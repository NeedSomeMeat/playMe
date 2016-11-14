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
var immutable_1 = require('immutable');
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var backend_service_1 = require("./backend.service");
var CONSTANTS_1 = require("../constants/CONSTANTS");
var album_model_1 = require("../models/album.model");
var artist_model_1 = require("../models/artist.model");
var track_model_1 = require("../models/track.model");
var DataStorage = (function () {
    function DataStorage(backend) {
        this.backend = backend;
        this._searchData = new BehaviorSubject_1.BehaviorSubject(immutable_1.List([]));
    }
    Object.defineProperty(DataStorage.prototype, "searchData", {
        get: function () {
            return this._searchData.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataStorage.prototype.searchFor = function (_a) {
        var _this = this;
        var type = _a.type, searchString = _a.searchString;
        this.backend.search(type, searchString)
            .map(function (res) { return res[Object.keys(res)[0]]; })
            .subscribe(function (res) {
            var items = res.items, next = res.next, total = res.total;
            _this._searchData.next(immutable_1.List(_this.assignDataToModel(items)));
        }, function (err) { });
    };
    DataStorage.prototype.assignDataToModel = function (data) {
        var assignData = function (obj, model) {
            return Object.assign(new model(), obj);
        };
        return data.map(function (item) {
            switch (item.type) {
                case CONSTANTS_1.CONSTANTS.SEARCH_TYPE.ALBUM:
                    return assignData(item, album_model_1.AlbumModel);
                case CONSTANTS_1.CONSTANTS.SEARCH_TYPE.ARTIST:
                    return assignData(item, artist_model_1.ArtistModel);
                case CONSTANTS_1.CONSTANTS.SEARCH_TYPE.TRACK:
                    return assignData(item, track_model_1.TrackModel);
                default:
                    return data;
            }
        });
    };
    DataStorage = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [backend_service_1.BackendService])
    ], DataStorage);
    return DataStorage;
}());
exports.DataStorage = DataStorage;
//# sourceMappingURL=dataStorage.service.js.map