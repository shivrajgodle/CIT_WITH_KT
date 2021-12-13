import { Injectable } from '@angular/core';
import {  CanActivate,Router } from '@angular/router';
import { UserServiceService } from './user/service/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private user:UserServiceService, private router:Router){
    
  } 
  
  canActivate():boolean {
      if(this.user.loggedIn())
      {
        return true;
      }
      else{
        this.router.navigate(['/user']);
        return false;
      }
  }
}
