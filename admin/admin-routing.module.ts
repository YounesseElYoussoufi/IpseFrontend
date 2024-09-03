import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {EmployeRetraiteComponent} from "./components/employe-retraite/employe-retraite.component";



const routes: Routes = [
  {path : "user" , component : UserComponent },
  {path : "employeRetraite" , component : EmployeRetraiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
