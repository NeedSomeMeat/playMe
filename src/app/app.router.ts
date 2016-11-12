import { Routes, RouterModule } from '@angular/router';
import {SearchPage} from "./pages/search/search.page";

export const routes: Routes = [
    { path: '', component: SearchPage}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
