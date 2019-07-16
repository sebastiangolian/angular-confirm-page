import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
