import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';
import { HistoryModel } from './Modal';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  historyModel!:HistoryModel[];
  transactionType: boolean=true;

constructor(private historyService:HistoryService, private route:ActivatedRoute){}
  ngOnInit(): void {
    const userId = Number(this.route.snapshot.params['accNo']);
    console.log(userId);

    this.historyService.transactionHistory(userId).subscribe(
      (data:any)=>{
        console.log(data);
        if (data.functionalityStatus===false)
          data.functionalityStatus="Deposit"
        this.historyModel = data;
        // if(this.historyModel)

        console.log(this.historyModel);

      })

  }
}
