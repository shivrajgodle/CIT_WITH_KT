import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './component/project/project.component';
import { SharedModule } from '../shared/shared_module.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProjectComponent }]),

  ]
})
export class ProjectModule { }
