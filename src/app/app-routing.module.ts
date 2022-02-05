import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(c => c.DashboardModule)}, // this is what redirected root to dashboard module.
  {path: '/', loadChildren: () => import('./dashboard/dashboard.module').then(c => c.DashboardModule)}, // this is what redirected root to dashboard module.





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
