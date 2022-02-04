import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  // {path: '/', redirectTo: '/admin/auth', pathMatch: 'full'},
  // {path: '', redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: '/', loadChildren: () => import('./dashboard/dashboard.module').then(c => c.DashboardModule)},
  // {path: 'admin' , loadChildren: () => import('./admin/authenticate.module').then(a => a.AdminModule)},
  {path: '', redirectTo: 'admin/auth', pathMatch: 'full'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
