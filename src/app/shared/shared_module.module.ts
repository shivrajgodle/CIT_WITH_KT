import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [],
  imports: [
    DividerModule,
    InputTextModule,
    ToggleButtonModule,
    DropdownModule,
    CardModule,
    PanelMenuModule,
    CommonModule,
    ToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    FileUploadModule,
    DialogModule,
    ToastModule,
    ProgressSpinnerModule,
    TableModule,
    FlexLayoutModule,
    MessageModule,
    MessagesModule
  ],
  exports:[
    ToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    FileUploadModule,
    DialogModule,
    ToastModule,
    ProgressSpinnerModule,
    TableModule,
    FlexLayoutModule,
    InputTextModule,
    ToggleButtonModule,
    DropdownModule,
    CardModule,
    PanelMenuModule,
    DividerModule,
    MessageModule,
    MessagesModule
  ]
})
export class SharedModule { }
