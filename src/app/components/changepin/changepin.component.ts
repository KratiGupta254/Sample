import { Component,OnInit } from '@angular/core';
import { Changepin } from 'src/app/modal/Changepin';
import { Router } from '@angular/router';
import { ChangepinService } from 'src/app/services/changepin.service';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
export class ChangepinComponent implements OnInit{

  changepin: Changepin=new Changepin();

  constructor(private changepinService: ChangepinService){

  }

  ngOnInit(): void {

  }

  submit(){
    // console.log(this.login);
    if(this.changepin.accNo==null){
      alert("Account Number is required");
      return;
    }
    if(this.changepin.pin==''||this.changepin.pin==null){
      alert("Pin is required");
      return;
    }
  }

  onChangePin(){

    this.changepinService.setNewPin(this.changepin).subscribe({
      next: (data:any) => {
          console.log("Success");
          console.log(JSON.stringify(data));
          alert("Pin changed successfully ");

          // this.router.navigate(['/functions']);


        }
        ,
       error: (error) => {
        alert("Sorry! Some error occurred");
          // console.log(JSON.stringify(error))
        }
        }
       )
  }

}
