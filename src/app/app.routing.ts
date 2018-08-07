import { Tab3Component } from './tabs/tab3/tab3.component';
import { HeaderComponent } from './header/header.component';
import { Tabs2Component } from './tabs/tabs2/tabs2.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const ROUTES: Routes = [
{path: '',
children: [
  { path: 'tab1', component: Tab1Component },
  { path: '', redirectTo: 'tab1', pathMatch: 'full' }
]},
{path: 'tab2', component: Tabs2Component},
{path: 'tab3', component: Tab3Component}];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
