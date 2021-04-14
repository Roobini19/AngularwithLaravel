import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = "http://127.0.0.1:8000/api/auth";

export class User {
  name: String | undefined;
  email: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    console.log(user);
    console.log(`${baseURL}/register`);
    return this.http.post(`${baseURL}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${baseURL}/login`, user);
  }

  userProfile(): Observable<any> {
    return this.http.get(`${baseURL}/user-profile`);
  }
}
