import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() { }

  getChartData():Observable<any> {
    return this._HttpClient.get(`${environment.chartBaseApiUrl}/sales`);
  }

  getBarData():Observable<any> {
    return this._HttpClient.get(`${environment.chartBaseApiUrl}/visits`);
  }

  getSummary():Observable<any>{
    return this._HttpClient.get(`${environment.chartBaseApiUrl}/summary`);
  }
}
