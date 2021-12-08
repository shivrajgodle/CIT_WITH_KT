import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { 
    path: "", 
    redirectTo: "user", 
    pathMatch: 'full' 
  },
  {
    path: "user",  
    loadChildren: () => UserModule
  },
  {
    path: "home", 
    loadChildren: () => HomeModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
