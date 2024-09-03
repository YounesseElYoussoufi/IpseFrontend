import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EdituserComponent } from './components/edituser/edituser.component';
import {MatIconModule} from "@angular/material/icon";
import {UserComponent} from "./components/user/user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {AppModule} from "../../app.module";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";


@NgModule({
  declarations: [
    UserComponent,
    EdituserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatInputModule, // Assure-toi que MatInputModule est ici
    FormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButton,
    MatIconButton,
    MatToolbar,
    AppModule,
    MatSelect,
    MatOption,
    MatDialogActions,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
  ]
})
export class AdminModule { }
