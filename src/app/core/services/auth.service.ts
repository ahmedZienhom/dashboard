import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Iregister } from '../interfaces/iregister';
import { isPlatformBrowser } from '@angular/common';
import { Ilogin } from '../interfaces/ilogin';
import { platformBrowser } from '@angular/platform-browser';
import { json } from 'd3';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _HttpClient = inject(HttpClient);

  private accounts:Iregister[] = [];


  addAccount(Data:Iregister):Observable<any>{
    return this._HttpClient.post(`${environment.authBaseApiUrl}/api/v1/auth/signup`, Data);
  }

  login(Data:Ilogin):Observable<any>{
    return this._HttpClient.post(`${environment.authBaseApiUrl}/api/v1/auth/signin`, Data);
  }
}
