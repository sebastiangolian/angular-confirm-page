import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageConfirmComponent } from './components/page-confirm/page-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageAboutComponent } from './components/page-about/page-about.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageConfirmComponent,
    PageAboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
