import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";

import {ToastModule} from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

import {FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {PanelMenuModule} from 'primeng/panelmenu';
import { CatalogueComponent } from "./component/catalogue.component";


@NgModule({
    declarations: [CatalogueComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastModule,
    ButtonModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    FlexLayoutModule,
    TableModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    DropdownModule,
    PanelMenuModule, 
    CardModule,
    ProgressSpinnerModule,
        MaterialComponentModule,
        RouterModule.forChild(
            [
                { 
                    path: '', 
                    component: CatalogueComponent 
                }
            ]),
    ]
})
export class CatalogueModule {

}