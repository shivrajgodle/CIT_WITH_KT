import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from './user/service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorsService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any, next:any) {
    let user=this.injector.get(UserServiceService);
      let tokenizedReq=req.clone({
        setHeaders:{
          Authorization:`Bearer ${user.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
  }
}
