import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _Router = inject(Router);



  steps:number = 1;
  msgError!:string|null;


  email:FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]]
  })

  verifyCode:FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required,Validators.pattern(/^[0-9]{6}$/)]]
  });

  newPassword:FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.minLength(8)]],
  })

  emailStep(){
    if (this.email.valid) {
      this._AuthService.forgotPassword(this.email.value).subscribe({
        next: response => {
          if (response.statusMsg == 'success') {
  
            this.steps++;
            this.msgError = null;

          }
        },
        error: err => {
          this.msgError = err.error.message
        }
      });
    }
  }

  codeStep(){
    if (this.verifyCode.valid) {
      this._AuthService.verifyResetCode(this.verifyCode.value).subscribe({
        next: response => {


          if (response.status == 'Success') {
  
            this.steps++;
            this.msgError = null;
  
          }
        },
        error: err => {
          this.msgError = err.error.message
        }
      });
    }
  }
  resetStep(){
    if (this.newPassword.valid) {
      this._AuthService.resetPassword(this.newPassword.value).subscribe({
        next: response => {
          if (response.token) {
            if(isPlatformBrowser(this._PLATFORM_ID)){
              this._Router.navigate(['/']);
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

