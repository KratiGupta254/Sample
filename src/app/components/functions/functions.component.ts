import { Component } from '@angular/core';
import { DepositComponent } from '../deposit/deposit.component';
import { MatDialog } from '@angular/material/dialog';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { ChangepinComponent } from '../changepin/changepin.component';
import { Router } from '@angular/router';
import { TranspopupComponent } from '../transpopup/transpopup.component';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {

  constructor(private matDialog:MatDialog,
    private router:Router){}
  openDeposit(){
    
    this.matDialog.open(DepositComponent,{
      width:'350px'
    
    })
  }
  openWithdraw(){
    
    this.matDialog.open(WithdrawComponent,{
      width:'350px'
    
    })
  }

  openPin(){
    
    this.matDialog.open(ChangepinComponent,{
      width:'350px'
    
    })
  }

  openTransaction(){
    // this.router.navigate(['/transactions']);
    this.matDialog.open(TranspopupComponent,{
      width:'350px'
    
    })
  }


}
