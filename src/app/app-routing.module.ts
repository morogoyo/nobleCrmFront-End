import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'admin/auth', pathMatch: 'full'},
  {path: 'client', loadChildren: () => import('./client/client.module').then(c => c.ClientModule)},
  {path: 'admin' , loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)}

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
