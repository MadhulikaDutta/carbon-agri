import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'map',
        component: MapComponent
    }

];
