import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { Menu } from '../../model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus : Menu[] = [];
  snav!:boolean;

  constructor(private router:Router) {
    this.menus = [];
    this.menus.push(new Menu("Client-Master","pi pi-users","home/client"));
    this.menus.push(new Menu("User Management","pi pi-users","home/team"));
    this.menus.push(new Menu("My Workspace","pi pi-briefcase","home/project" ));
   }

  ngOnInit(): void {
    this.onMenuClick(this.menus[0]);
  }

  onMenuClick(menu: Menu){
    this.router.navigate([menu.routeLink]);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user']);
  }
}
