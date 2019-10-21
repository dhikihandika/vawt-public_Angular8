import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutasComponent } from './aboutas/aboutas.component';


// Define routes to acces the navigation bar
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/reports', pathMatch: 'full'},
  {path:'reports', component: ReportsComponent},
  {path: '', redirectTo: '/aboutas', pathMatch: 'full'},
  {path:'aboutas', component: AboutasComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
