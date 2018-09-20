import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { UtilComponent } from './util/util.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
