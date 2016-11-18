import { Routes, RouterModule } from '@angular/router';
import {SearchPage} from "./pages/search/search.page";
import {InfoPage} from "./pages/info/info.page";

export const routes: Routes = [
    { path: '', component: SearchPage},
    { path: 'info', component: InfoPage}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
