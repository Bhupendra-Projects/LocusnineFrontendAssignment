import { User } from './common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseURL = 'https://localhost:44334/api';

  constructor(private http:HttpClient) { }

  public getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseURL + '/Users');
  }

  public saveUser(user: any): Observable<string>{
    return this.http.post<string>(this.apiBaseURL + '/Users', user);
  }

  public deleteUser(userId = 0): Observable<string>{
    return this.http.delete<string>(this.apiBaseURL + '/Users/'+userId);
  }
}
