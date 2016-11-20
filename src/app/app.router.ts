import { Routes, RouterModule } from '@angular/router';
import {SearchPage} from "./pages/search/search.page";
import {InfoPage} from "./pages/info/info.page";

export const routes: Routes = [
    { path: '', component: SearchPage},
    { path: 'info/:id', component: InfoPage},
    { path: 'artist/:id', component: InfoPage},
    { path: 'album/:id', component: InfoPage},
    { path: 'track/:id', component: InfoPage}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
