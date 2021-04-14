import { Injectable } from '@angular/core';

const baseURL = "http://127.0.0.1:8000/api/auth";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private issuer = {
    login: `${baseURL}/login`,
    register: `${baseURL}/register`,
  }

  constructor() { }

  handleData(token: string) {
    localStorage.setItem('auth_token',token);
  }  

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isValidToken() :any {
    const token = this.getToken();

    if(token !== null && token) {
      const payload = this.payload(token);
      if(payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
      }
    } else {
      return false;
    }
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }

  payload(token: string) {
    const jwtpayload = token.split('.')[1];

    return JSON.parse(atob(jwtpayload));
  }  

  isLoggedIn() {
    return this.isValidToken();
  }
}
