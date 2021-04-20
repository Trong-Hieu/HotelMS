import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Staff } from '../Model/staff';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginCheck: string = "http://localhost:8080/staffs/login"

  constructor(
    private http: HttpClient,
  ) { }

  checkLogin(user: User) :Observable<Staff>{
    return this.http.get<Staff>(this.loginCheck + "/" + user.username + "/" + user.staffPassword)
  }
}
