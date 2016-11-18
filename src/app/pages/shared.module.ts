import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from "@angular/http";

//Services
import {BackendService} from "../services/backend.service";
import {DataStorage} from "../services/dataStorage.service";
import {UrlBuilderService} from "../services/urlBuilder.service";

//Pages
import {SearchPage} from "./search/search.page";
import {InfoPage} from "./info/info.page";

//Components
import {Header} from "../components/dummy/header/header.component";
import {Search} from "../components/smart/search.component/search.component";
import {Dropdown} from "../components/dummy/dropdown/dropdown.component";
import {MusicStuff} from "../components/dummy/musicStuff.component/musicStuff.component";
import {MusicStuffContainer} from "../components/smart/musicStuffContainer.component/musicStuffContainer.component";
import {ScrollContent} from "../components/smart/scrollContent/scrollContent.component";
import {controlButtons} from "../components/smart/controllButtons/controllButtons";
import {actionButton} from "../components/dummy/actionButton/actionButton.component";


@NgModule({
    imports:      [ CommonModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [ SearchPage, InfoPage, Header, Search, MusicStuffContainer, Dropdown, MusicStuff, ScrollContent, controlButtons, actionButton ],
    exports:      [ CommonModule, FormsModule, SearchPage, Header, Search, MusicStuffContainer, Dropdown, MusicStuff, ScrollContent, controlButtons, actionButton ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ BackendService, DataStorage, UrlBuilderService ]
        };
    }
}