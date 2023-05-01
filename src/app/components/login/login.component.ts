import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/modal/Login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //captchaText!: string;
  captchaText=<HTMLElement>document.getElementById("capt")
  loginUser:LoginUser = new LoginUser();
  constructor(private router:Router,private userService: UserService){

  }

  ngOnInit(): void {

  }


  login=new FormGroup({
    accNo: new FormControl(""),
    pin: new FormControl(""),

  });

  submit(){
    console.log(this.login);
    if(this.loginUser.accNo==null){
      alert("Account Number is required");
      return;
    }
    if(this.loginUser.pin==''||this.loginUser.pin==null){
      alert("Pin is required");
      return;
    }
  }

  onFunctions(){


  this.userService.checkUser(this.loginUser).subscribe({
    next: (data:any) => {
        console.log("Success");
        console.log(JSON.stringify(data));
        alert("Successful Registration");
        this.router.navigate(['/functions']);


      }
      ,
     error: (error) => {
      alert("Error");

      }
      }
     )

}
}
