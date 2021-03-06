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
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
//Services
var backend_service_1 = require("../services/backend.service");
var dataStorage_service_1 = require("../services/dataStorage.service");
var urlBuilder_service_1 = require("../services/urlBuilder.service");
var helper_service_1 = require("../services/helper.service");
var audio_service_1 = require("../services/audio.service");
var search_store_1 = require("../components/smart/search.component/search.store");
//Pages
var search_page_1 = require("./search/search.page");
var info_page_1 = require("./info/info.page");
//Components
var header_component_1 = require("../components/dummy/header/header.component");
var search_component_1 = require("../components/smart/search.component/search.component");
var dropdown_component_1 = require("../components/dummy/dropdown/dropdown.component");
var musicStuff_component_1 = require("../components/dummy/musicStuff/musicStuff.component");
var musicStuffContainer_component_1 = require("../components/smart/musicStuffContainer/musicStuffContainer.component");
var scrollContent_component_1 = require("../components/smart/scrollContent/scrollContent.component");
var controllButtons_1 = require("../components/smart/controllButtons/controllButtons");
var actionButton_component_1 = require("../components/dummy/actionButton/actionButton.component");
var infoContent_component_1 = require("../components/dummy/infoContent/infoContent.component");
var musicBlock_component_1 = require("../components/smart/musicBlock/musicBlock.component");
var audioSound_1 = require("../components/dummy/audioSound/audioSound");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [backend_service_1.BackendService, dataStorage_service_1.DataStorage, urlBuilder_service_1.UrlBuilderService, helper_service_1.HelperService, audio_service_1.AudioService, search_store_1.SearchStore]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [search_page_1.SearchPage, info_page_1.InfoPage, header_component_1.Header, search_component_1.Search, musicStuffContainer_component_1.MusicStuffContainer, dropdown_component_1.Dropdown,
                musicStuff_component_1.MusicStuff, scrollContent_component_1.ScrollContent, controllButtons_1.controlButtons, actionButton_component_1.actionButton, infoContent_component_1.InfoContent, musicBlock_component_1.MusicBlock, audioSound_1.AudioSound],
            exports: [common_1.CommonModule, forms_1.FormsModule, search_page_1.SearchPage, header_component_1.Header, search_component_1.Search, musicStuffContainer_component_1.MusicStuffContainer, dropdown_component_1.Dropdown,
                musicStuff_component_1.MusicStuff, scrollContent_component_1.ScrollContent, controllButtons_1.controlButtons, actionButton_component_1.actionButton, infoContent_component_1.InfoContent, musicBlock_component_1.MusicBlock, audioSound_1.AudioSound]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map