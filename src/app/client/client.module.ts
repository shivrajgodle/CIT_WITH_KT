import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './component/client/client.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/component/home/home.component';
import { SharedModule } from '../shared/shared_module.module';



@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ClientComponent }]),

  ]
})
export class ClientModule { }
