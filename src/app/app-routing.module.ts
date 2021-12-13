import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
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
    canActivate:[AuthGuard],
    loadChildren: () => HomeModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }