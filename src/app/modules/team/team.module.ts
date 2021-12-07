import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './component/team.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    ButtonModule,
    SidebarModule,
    FileUploadModule,
    ToolbarModule,
    DialogModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    TableModule,
    FlexLayoutModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    PanelMenuModule, 
    DropdownModule,
    ProgressSpinnerModule,
    CardModule,
    RouterModule.forChild(
        [
            { 
                path: '', 
                component: TeamComponent 
            }
        ]),
  ]
})
export class TeamModule { }
