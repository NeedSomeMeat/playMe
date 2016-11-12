import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from "@angular/http";

//Services
import {BackendService} from "../services/backend.service";

//Pages
import {SearchPage} from "./search/search.page";

//Components
import {Header} from "../components/dummy/header/header.component";
import {Search} from "../components/smart/search.component/search.component";


@NgModule({
    imports:      [ CommonModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [ SearchPage, Header, Search ],
    exports:      [ CommonModule, FormsModule, SearchPage, Header, Search ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ BackendService ]
        };
    }
}