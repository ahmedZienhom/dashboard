import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() { }

  getChartData():Observable<any> {
    return this._HttpClient.get('salesData.json');
  }

  getBarData():Observable<any> {
    return this._HttpClient.get('barData.json');
  }
}
