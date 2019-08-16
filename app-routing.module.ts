import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { TilesComponent } from './tiles/tiles.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'tiles',component:TilesComponent
  },
  {
    path:'',redirectTo:'login',pathMatch:'prefix'
  },
  {
    path:'**',redirectTo:'login',pathMatch:'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
