import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/modal/User';
import { UserService } from 'src/app/services/user.service';
//import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();
  constructor(private router:Router,private userService: UserService) {

  }



  ngOnInit(): void {

  }

  // user = new FormGroup({
  //   accNo: new FormControl("",[Validators.required, Validators.minLength(10)]),
  //   name: new FormControl("",[Validators.required,Validators.minLength(2)]),
  //   fatherName: new FormControl("",[Validators.required,Validators.minLength(2)]),
  //   email: new FormControl("",[Validators.required,Validators.email]),
  //   address: new FormControl("",[Validators.required]),
  //   pin: new FormControl("",[Validators.required]),
  //   dob:  new FormControl("",[Validators.required]),

  // });
  //it is basically an object
  // public user = {

  //   accNo: '',
  //   name: '',
  //   fatherName: '',
  //   email: '',
  //   address: '',
  //   pin: '',
  //   dob: ''

  // };

  submit() {
    
    if (this.user.accNo == null) {
      alert("Account Number is required");
      return;
    }

    if (this.user.name == '' || this.user == null) {
      alert("Name is required");
      return;
    }
    if (this.user.fatherName == '' || this.user.fatherName == null) {
      alert("Father Name is required");
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      alert("Email is required");
      return;
    }

    if (this.user.address == '' || this.user.address == null) {
      alert("Address is required");
      return;
    }
    if (this.user.pin == '' || this.user.pin == null) {
      alert("Pin is required");
      return;
    }
    if (this.user.dob == '' || this.user.dob == null) {
      alert("Date of Birth is required");
      return;
    }

    this.user.balance=0.0;
  }
    //call addUser function from service
    onHome(){
    this.userService.addUser(this.user).subscribe({
    next: (data:any) => {
        console.log("Success");
        console.log(JSON.stringify(data));
        alert("Successful Registration");
        this.router.navigate(['/home']);
      },
     error: (error) => {
        console.log(JSON.stringify(error));
        alert("Successfull Registration");
        this.router.navigate(['/home']);
      }
      }
    )
      
    
    //.subscribe(
      //when method call is successful 
    //   (data) => {
    //     console.log("Success");
    //     console.log(data);
    //     alert("Successful Registration")
    //   },
    //   (error) => {
        
    //     alert("Error");
    //   }
    // )

    

  // get Account(): FormControl{
  //   return this.user.get("accNo") as FormControl;
  // }
  // get Name(): FormControl{
  //   return this.user.get("name") as FormControl;
  // }
  // get FatherName(): FormControl{
  //   return this.user.get("fatherName") as FormControl;
  // }
  // get Email(): FormControl{
  //   return this.user.get("email") as FormControl;
  // }
  // get Address(): FormControl{
  //   return this.user.get("address") as FormControl;
  // }
  // get DateOfBirth(): FormControl{
  //   return this.user.get("dob") as FormControl;
  // }

  };
}
