import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { Tabs2Component } from './tabs/tabs2/tabs2.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Tab1Component,
    Tabs2Component
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
