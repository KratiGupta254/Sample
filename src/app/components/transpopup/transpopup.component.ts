import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-transpopup',
  templateUrl: './transpopup.component.html',
  styleUrls: ['./transpopup.component.css']
})
export class TranspopupComponent {

  accNo!:number;
  constructor(private router:Router, private historyService:HistoryService){
  }

  openTransaction(){
    console.log(this.accNo);
    
    this.router.navigate(['transactions',this.accNo])
    
  }

}
