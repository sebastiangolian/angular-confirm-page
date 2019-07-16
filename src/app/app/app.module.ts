import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormsModule }   from '@angular/forms';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageConfirmComponent } from './components/page-confirm/page-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
