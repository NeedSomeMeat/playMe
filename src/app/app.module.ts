import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.router';

import {AppComponent}  from './app.component';
import {SharedModule} from "./pages/shared.module";

@NgModule({
    imports: [ BrowserModule, SharedModule.forRoot(),
        routing
    ],
    declarations: [ AppComponent ],
    providers: [ appRoutingProviders ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }