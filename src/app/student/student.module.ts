import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingmModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,StudentRoutingmModule,FormsModule,
  ]
})
export class StudentModule { }
