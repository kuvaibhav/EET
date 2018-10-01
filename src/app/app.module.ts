import { ToasterService } from './services/toaster.service';
import { ToastrModule } from 'ngx-toastr';
import { EETHttpInterceptor } from './services/eet.http.interceptor';
import { Tab4Service } from './tabs/tab4/tab4.service';
import { Tab3Component } from './tabs/tab3/tab3.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { PipeComponent } from './tabs/tab4/pipe/pipe.component';
import { FilterPipe } from './tabs/tab4/filter.pipe';
import { ShortenPipe } from './tabs/tab4/pipe/shorten.pipe';

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
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EETHttpInterceptor,
      multi: true
    },
    AuthGuard,
    Tab4Service,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
