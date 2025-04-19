import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartDataService } from '../../core/services/chart-data.service';
import * as d3 from "d3"; 


@Component({
  selector: 'app-report',
  imports: [NgxChartsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _ChartDataService = inject(ChartDataService);
  chartData: any = [];
  curve = d3.curveLinear;
  barData: any = []
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @ViewChild('barContainer') barContainer!: ElementRef;
  private readonly _cd = inject(ChangeDetectorRef);
  chartWidth!: number;
  barWidth!: number;


  colorScheme:any = {
    domain: ['#4f46e5'] 
  };

  ngOnInit(): void {
    this._ChartDataService.getChartData().subscribe(data => {
      this.chartData = data;
    });
    this._ChartDataService.getBarData().subscribe(data => {
      this.barData = data;
    });
  }
  ngAfterViewInit(): void {
    this.chartWidth = this.getDivWidth(this.chartContainer);
    this.barWidth = this.getDivWidth(this.barContainer);

    this._cd.detectChanges();
  }

  
  getDivWidth(container:ElementRef) {
    return container.nativeElement.offsetWidth;
  }

}
