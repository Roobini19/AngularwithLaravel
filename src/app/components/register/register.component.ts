import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {

      this.registerForm = this.fb.group({
        name: [''],
        email: [''],
        password: [''],
        password_confirmation: [''],
      });

   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result);
      },

      error => {
        this.errors = error.error;
      },

      () => {
        this.registerForm?.reset();
        this.router.navigate(['login']);
      }
    )
  }

}
