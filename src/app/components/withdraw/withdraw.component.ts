import { Component } from '@angular/core';
import { Withdraw } from 'src/app/modal/Withdraw';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  withdraw:Withdraw=new Withdraw();
  constructor(private functionsService: FunctionsService){}

  onWithdraw()
  {
    this.functionsService.withdrawAmt(this.withdraw).subscribe({
      next: (data:any) => {
          console.log("Success");
          console.log(JSON.stringify(data));
          alert("Successful Withdraw");
          // this.router.navigate(['/functions']);


        }
        ,
       error: (error) => {
        alert("Sorry some error occured");
          // console.log(JSON.stringify(error));
        }
        }
       )


  }

}
