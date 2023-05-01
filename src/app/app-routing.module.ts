import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:"signup", component:SignupComponent,pathMatch:'full'},
  {path:"login", component:LoginComponent,pathMatch:'full'},
  {path:"functions", component:FunctionsComponent,pathMatch:'full'},
  {path:"transactions/:accNo", component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
