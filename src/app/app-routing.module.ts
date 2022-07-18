import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
      {path:'',redirectTo:"dashboard",pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'media',component:MediaComponent},
      {path:'statistics',component: StatisticsComponent},
      {path:'products',component:ProductsComponent},
      {path:'pages',component:PagesComponent},
      {path:'coupens',component:CoupensComponent},      
      {path:'settings',component:SettingsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
