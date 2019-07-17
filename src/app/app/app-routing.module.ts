import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageConfirmComponent } from './components/page-confirm/page-confirm.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { RulesGuard } from './guards/rules.guard';

const routes: Routes = [
  { path: '', component: PageHomeComponent,canActivate: [RulesGuard]},
  { path: 'home', component: PageHomeComponent,canActivate: [RulesGuard]},
  { path: 'confirm', component: PageConfirmComponent},
  { path: 'about', component: PageAboutComponent,canActivate: [RulesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
