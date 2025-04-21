import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartDataService } from '../../core/services/chart-data.service';
import * as d3 from "d3";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { AreaChartComponent } from "../area-chart/area-chart.component"; 


@Component({
  selector: 'app-report',
  imports: [NgxChartsModule, BarChartComponent, AreaChartComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent{
  private readonly _ChartDataService = inject(ChartDataService);

  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @ViewChild('barContainer') barContainer!: ElementRef;
  private readonly _cd = inject(ChangeDetectorRef);
  chartWidth!: number;
  barWidth!: number; 
  areaChartTime:number = 1;
  barCharTime:number = 1;

  colorScheme:any = {
    domain: ['#4f46e5'] 
  };


  ngAfterViewInit(): void {
    this.chartWidth = this.getDivWidth(this.chartContainer) - 10;
    this.barWidth = this.getDivWidth(this.barContainer) - 10;

    this._cd.detectChanges();
  }

  getDivWidth(container:ElementRef) {
    return container.nativeElement.offsetWidth;
  }

  makeAreaTime(time:number)
  {
    this.areaChartTime = time;
  }
  makeBarTime(time:number)
  {
    this.barCharTime = time;
  }


}
