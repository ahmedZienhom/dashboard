import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Iregister } from '../interfaces/iregister';
import { isPlatformBrowser } from '@angular/common';
import { Ilogin } from '../interfaces/ilogin';
import { platformBrowser } from '@angular/platform-browser';
import { json } from 'd3';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private accounts:Iregister[] = [];


  addAccount(Data:Iregister):boolean{
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this.accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
      if(this.accounts.length === 0 || this.accounts.some((account) => account.email !== Data.email)){
          this.accounts.push(Data);
          localStorage.setItem('accounts', JSON.stringify(this.accounts));
          localStorage.setItem('isLoggedIn', 'true');
          return false;
        }
    }
    return true;
  }

  login(Data:Ilogin):boolean {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this.accounts = JSON.parse(localStorage.getItem('accounts') || '[]');

      if(this.accounts.some(a => a.email == Data.email && a.pw == Data.pw)){
        localStorage.setItem('isLoggedIn', 'true');
        return true
      }
    }
    return false
  }
}
