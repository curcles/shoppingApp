import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 routes:Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
},
  {
  path:'home',
  loadChildren: () => import ('./features/home/home.module').then(m => m.HomeModule)
},
  {
    path:'*',
    redirectTo: 'home'
  }
];

}
