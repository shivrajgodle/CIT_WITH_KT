import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './component/team/team.component';
import { SharedModule } from '../shared/shared_module.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: TeamComponent }]),

  ]
})
export class TeamModule { }
