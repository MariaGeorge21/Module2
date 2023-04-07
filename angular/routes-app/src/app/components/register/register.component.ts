import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
 name: string="";
  email: string="";
 pass: string="";
 repass:string="";

   onSubmit() {
     console.log('Registration form submitted!');
     console.log(`Name: ${this.name}`);
     console.log(`Email: ${this.email}`);
     console.log(`Password: ${this.pass}`);
     console.log(`Retype: ${this.pass}`);
   }
}


