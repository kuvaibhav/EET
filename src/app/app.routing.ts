import { AuthGuard } from './services/AuthGuard';
import { TemplateFormComponent } from './tabs/tab4/template-form/template-form.component';
import { Tab3Component } from './tabs/tab3/tab3.component';
import { HeaderComponent } from './header/header.component';
import { Tabs2Component } from './tabs/tabs2/tabs2.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Tab4Component } from './tabs/tab4/tab4.component';
import { ReactiveFormComponent } from './tabs/tab4/reactive-form/reactive-form.component';

export const ROUTES: Routes = [
  { path: '', component: Tab1Component },
  { path: 'tab2', component: Tabs2Component },
  { path: 'tab3', component: Tab3Component },
  {
    path: 'tab4',
    component: Tab4Component,
    children: [
      { path: 'templateform', component: TemplateFormComponent },
      { path: 'reactiveform', component: ReactiveFormComponent },
      // { path: '', redirectTo: 'templateform', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
