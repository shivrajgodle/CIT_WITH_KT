import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";
import { HomeComponent } from "./component/home.component";
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        HttpClientModule,
        MaterialComponentModule,
        RouterModule.forChild([
            {
                path: '', component: HomeComponent, children: [
                    {
                        path: "catalogue",
                        loadChildren: () => import("../catalogue/catalogue.module").then(m => m.CatalogueModule),
                    },
                    {
                        path:"team",
                        loadChildren: () => import("../team/team.module").then(m => m.TeamModule)
                    }
                ]
            },

        ]),

    ]
})
export class HomeModule {

}