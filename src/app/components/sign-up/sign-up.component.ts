import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,NgClass, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _Router = inject(Router);
  msgError!:string;


  registerGroup:FormGroup = this._FormBuilder.nonNullable.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    rePassword: [null],
    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
  }, {validators: this.confirmPassword} );

  confirmPassword(Group:AbstractControl){
    return Group.get('password')?.value === Group.get('rePassword')?.value ? null : { mismatch : true };
  }


  register(){
    if(this.registerGroup.valid){
    this._AuthService.addAccount(this.registerGroup.value).subscribe({
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
    }else{
      this.registerGroup.markAllAsTouched();
    }
  }
}
