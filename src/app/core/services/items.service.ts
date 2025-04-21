import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() { }

  getItems(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/products');
  }
}
