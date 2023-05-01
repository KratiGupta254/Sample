import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import baseUrl from './helping';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepinService {

  constructor(private http:HttpClient) { }

  public setNewPin(setnewpin:any):Observable<Object>
  {
    return this.http.put(`${baseUrl}/atm/newpin`,setnewpin);
  }
}
