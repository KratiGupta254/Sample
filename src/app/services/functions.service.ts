import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private http:HttpClient) { }

  public depositAmt(depositamt:any):Observable<Object>
  {
    return this.http.put(`${baseUrl}/atm/deposit`,depositamt);
  }

  public withdrawAmt(withdrawamt:any):Observable<Object>
  {
    return this.http.put(`${baseUrl}/atm/withdrawl`,withdrawamt);
  }
}
