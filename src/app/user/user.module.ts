import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './component/user/user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared_module.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: UserComponent }]),

  ]
})
export class UserModule { }
