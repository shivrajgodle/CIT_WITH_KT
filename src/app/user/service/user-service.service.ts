import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
}
