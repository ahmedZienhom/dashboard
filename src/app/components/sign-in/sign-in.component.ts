import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  private readonly _Router = inject(Router);
  valid:boolean = true;



  loginform:FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    pw: [null, [Validators.required, Validators.minLength(8)]],
  });

  login(){
    if(this.loginform.valid){
      this.valid = this._AuthService.login(this.loginform.value);
      if(this.valid){
        this._Router.navigate(['/'])
      }
    }
    this.loginform.markAllAsTouched
}
}
