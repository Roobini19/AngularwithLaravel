import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

export class User {
  name: String | undefined;
  email: String | undefined;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  userProfile : User | undefined;

  constructor(public authService: AuthService) {
    this.authService.userProfile().subscribe((data:any) => {
      this.userProfile = data;
    })
   }

  ngOnInit(): void {
  }

}
function data(data: any) {
  throw new Error('Function not implemented.');
}

