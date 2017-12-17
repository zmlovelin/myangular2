import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AsslsetComponent } from './component/asslset/asslset.component';
import { ProudctComponent } from './component/proudct/proudct.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'asslset',
    component:AsslsetComponent
  },
  {
    path:'proudct',
    component:ProudctComponent
  },
  // {
  //   path:'son',
  //   component:SonComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
