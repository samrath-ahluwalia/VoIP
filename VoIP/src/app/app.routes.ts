import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { CenterstatsComponent } from './components/centerstats/centerstats.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "details", component: DetailsComponent},
    {path: "centerstats", component: CenterstatsComponent}
];
