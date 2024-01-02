import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingmModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,StudentRoutingmModule
  ]
})
export class StudentModule { }
