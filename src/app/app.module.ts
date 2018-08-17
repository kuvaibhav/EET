import { Tab3Component } from './tabs/tab3/tab3.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { PipeComponent } from './tabs/tab4/pipe/pipe.component';
import { ShortenPipe } from './tabs/tab4/pipe/shorten.pipe';
import { FilterPipe } from './tabs/tab4/filter.pipe';

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
    ReactiveFormComponent,
    PipeComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
