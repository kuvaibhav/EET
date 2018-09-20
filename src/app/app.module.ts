import { Tab4Service } from './tabs/tab4/tab4.service';
import { Tab3Component } from './tabs/tab3/tab3.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { Tabs2Component } from './tabs/tabs2/tabs2.component';
import { AppRoutingModule } from './app.routing';
import { Tab1Child1Component } from './tabs/tab1/tab1-child1/tab1-child1.component';
import { Tab3Child1Component } from './tabs/tab3/tab3-child1/tab3-child1.component';
import { Tab3Child2Component } from './tabs/tab3/tab3-child2/tab3-child2.component';
import { Tab4Component } from './tabs/tab4/tab4.component';
import { TemplateFormComponent } from './tabs/tab4/template-form/template-form.component';
import { ReactiveFormComponent } from './tabs/tab4/reactive-form/reactive-form.component';
import { AuthGuard } from './services/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Tab1Component,
    Tabs2Component,
    Tab3Component,
    Tab1Child1Component,
    Tab3Child1Component,
    Tab3Child2Component,
    Tab4Component,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    Tab4Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
