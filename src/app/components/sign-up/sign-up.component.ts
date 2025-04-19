import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  private readonly _Router = inject(Router);
  exist!:boolean;


  registerGroup:FormGroup = this._FormBuilder.nonNullable.group({
    fName: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
    lName: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
    email: [null, [Validators.required, Validators.email]],
    pw: [null, [Validators.required, Validators.minLength(8)]],
    confirmPw: [null],
  }, {validators: this.confirmPassword} );

  confirmPassword(Group:AbstractControl){
    return Group.get('pw')?.value === Group.get('confirmPw')?.value ? null : { mismatch : true };
  }


  register(){
    if(this.registerGroup.valid){
      let exist:boolean = this._AuthService.addAccount(this.registerGroup.value);
      if(exist){
        this.exist = exist;
      }else{
      this.registerGroup.reset();
      this._Router.navigate(['/']);
    }
    }else{  
      this.registerGroup.markAllAsTouched();
    }
  }
}
