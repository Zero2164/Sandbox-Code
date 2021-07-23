import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RosterComponent } from './components/roster/roster.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'roster', component: RosterComponent}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
}; 

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
