import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorsService} from './token-interceptors.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorsService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
