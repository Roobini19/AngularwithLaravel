import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoStateService } from './shared/auth.interceptor';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }
  title = 'frontend';
  isSignedIn : boolean | undefined;

  constructor( 
    private auth: AutoStateService,
    public router: Router,
    public token: TokenService,
  ) { }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

}
