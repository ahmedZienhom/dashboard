import { inject, Injectable } from '@angular/core';
import { Iregister } from '../interfaces/iregister';
import { Ilogin } from '../interfaces/ilogin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);

  private accounts:Iregister[] = [];


  addAccount(Data:Iregister):Observable<any>{
    return this._HttpClient.post(`${environment.authBaseApiUrl}/api/v1/auth/signup`, Data);
  }

  login(Data:Ilogin):Observable<any>{
    return this._HttpClient.post(`${environment.authBaseApiUrl}/api/v1/auth/signin`, Data);
  }
  forgotPassword(Data:any):Observable<any> {
    return this._HttpClient.post(`${environment.authBaseApiUrl}/api/v1/auth/forgotPasswords`, Data)
  }
  verifyResetCode(Data:any):Observable<any>{
    return this._HttpClient.post(`${environment.authBaseApiUrl}/api/v1/auth/verifyResetCode`, Data);
  }
  resetPassword(Data:Ilogin):Observable<any>{
    return this._HttpClient.put(`${environment.authBaseApiUrl}/api/v1/auth/resetPassword`, Data);
  }
}
