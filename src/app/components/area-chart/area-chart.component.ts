import { Component, inject, OnChanges, input, effect, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartDataService } from '../../core/services/chart-data.service';
import { CurveFactory } from 'd3-shape';
import * as d3 from "d3";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-area-chart',
  imports: [NgxChartsModule],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent implements OnChanges {

    private readonly _ChartDataService = inject(ChartDataService);
    curve:CurveFactory = d3.curveLinear;
    readonly chartWidth = input.required<number>();
     @Input() chartTime = 1 ;  
    colorScheme:any = {
      domain: ['#4f46e5'] 
    };
    chartData: any = [];
    subscripe!:Subscription;


    ngOnChanges(): void {
        this.getchartData();
    }

    

      
    getchartData() {
      this.subscripe?.unsubscribe();
    
      this.subscripe = this._ChartDataService.getChartData().subscribe({
        next: data => {
          this.chartData = [
            {
              name: 'Sales',
              series: data[this.chartTime].data.map((item: any) => ({
                name: item.label,
                value: item.value
              }))
            }
          ];
        }
      });
    }
    
      
}
