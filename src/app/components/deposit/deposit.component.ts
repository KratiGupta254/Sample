import { Component } from '@angular/core';
import { Deposit } from 'src/app/modal/Deposit';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  deposit:Deposit=new Deposit();
  constructor(private functionsService: FunctionsService){}

  onDeposit(){
    this.functionsService.depositAmt(this.deposit).subscribe({
      next: (data:any) => {
          console.log("Success");
          console.log(JSON.stringify(data));
          alert("Amount Successfully Deposited");
          // this.router.navigate(['/functions']);


        }
        ,
       error: (error) => {
        alert("Sorry! There is some Error");
          // console.log(JSON.stringify(error));
        }
        }
       )

  }

}
