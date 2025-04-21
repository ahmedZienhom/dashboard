import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _Router = inject(Router);
  valid:boolean = true;
  msgError: string = '';


  loginform:FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  login(){
    if(this.loginform.valid){
      this._AuthService.login(this.loginform.value).subscribe({
        next: response => {
          if (response.message == 'success') {
  
            this._Router.navigate(['/'])
            if (isPlatformBrowser(this._PLATFORM_ID)) {
              localStorage.setItem('token', response.token)
            }
          }
        },
        error: err => {
          this.msgError = err.error.message
        }
      });
    }
  }
}
