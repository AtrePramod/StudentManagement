import { Component } from '@angular/core'; 
import { StudService } from '../stud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   firstName= "";
      lastName="";
      dob= "";
      gender="";
      email="";
  phoneNumber ="";
  
constructor(private registerStud:StudService){}
 
    onSubmit() {
     const  student ={ 
      first_name: this.firstName,
      last_name:this.lastName,
      date_of_birth:this.dob,
      gender:this.gender,
      email:this.email,
      phone_number :this.phoneNumber
     }
      
      this.registerStud.registerStud(student).subscribe((res) => { console.log('Data saved successfully:', res); },
        (error) => {
          console.log('Error saving data:', error);
        });
      Swal.fire({
        title: "Good job!",
        text: "Student Register Sussessfully!",
        icon: "success"
      });  
      
      this.firstName = "";
      this. lastName="";
      this. dob= "";
      this.gender="";
      this.email="";
      this.phoneNumber ="";
  }
}
