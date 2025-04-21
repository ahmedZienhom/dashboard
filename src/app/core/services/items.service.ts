import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() { }

  getItems(): Observable<any> {
    return this._HttpClient.get(`${environment.productsBaseApiUrl}/products`);
  }
}
