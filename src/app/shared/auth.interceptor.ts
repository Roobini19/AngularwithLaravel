import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AutoStateService {

  private userState = new BehaviorSubject(this.token.isLoggedIn());

  userAuthState = this.userState.asObservable();

  constructor(public token: TokenService) { }

  setAuthState(value: boolean | undefined) {
    this.userState.next(value);
  }

}
