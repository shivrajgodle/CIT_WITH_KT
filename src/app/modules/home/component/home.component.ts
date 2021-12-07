import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Menu } from "../model/menu";

@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    snav:any;
    menus : Menu[] = [];

    constructor(private cookieService: CookieService, private router: Router) {

        this.menus = [];
        this.menus.push(new Menu("Client Master","category","home/catalogue"));
        this.menus.push(new Menu("User Management","shopping_cart","home/team"));
        this.menus.push(new Menu("My Workspace","list_alt","/myorders" ));
        
    }

    ngOnInit() {

    }

    onMenuClick(menu: Menu){
        console.log(menu);
        console.log(this.cookieService.get('customtoken'));
        this.router.navigate([menu.routeLink]);
       
    }

    logout(){
        this.router.navigate(['/']);
    }
}