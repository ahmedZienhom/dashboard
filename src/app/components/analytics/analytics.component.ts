import { Component, inject, OnInit } from '@angular/core';
import { ChartDataService } from '../../core/services/chart-data.service';
import { Isummary } from '../../core/interfaces/isummary';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent implements OnInit {
  private readonly _ChartDataService = inject(ChartDataService);
  summary!:Isummary;


  ngOnInit(): void {
    this._ChartDataService.getSummary().subscribe({
      next: data => {
        this.summary = data
      }
    });
  }
}
