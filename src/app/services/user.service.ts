import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helping';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addUser(user:any):Observable<Object>{
    return this.http.post(`${baseUrl}/atm/signup`,user, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

  }

  public checkUser(loginUser:any):Observable<Object>
  {
    return this.http.post(`${baseUrl}/atm/login`,loginUser, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
