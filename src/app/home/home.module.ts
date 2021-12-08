import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientModule } from '../client/client.module';
import { TeamModule } from '../team/team.module';
import { ProjectModule } from '../project/project.module';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from '../shared/shared_module.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,


    RouterModule.forChild([
      {
          path: '', component: HomeComponent, children: [
              {
                  path: "client/myClient",
                  loadChildren: () => ClientModule,
              },
              {
                  path: "team",
                  loadChildren: () => TeamModule,
              },
              {
                  path: "project",
                  loadChildren: () => ProjectModule,
              },
          ]
      },

  ]),
  ]
})
export class HomeModule { }
