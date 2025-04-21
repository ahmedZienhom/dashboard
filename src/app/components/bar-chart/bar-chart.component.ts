import { Component,  inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartDataService } from '../../core/services/chart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  imports: [NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent   {
  private readonly _ChartDataService = inject(ChartDataService);

  colorScheme:any = {
    domain: ['#4f46e5'] 
  };
  @Input() barWidth: number = 0;
  @Input() barTime:number = 1;
  barData: any = [];
  subscripe!:Subscription;



  ngOnChanges(changes: SimpleChanges): void {

    this.getchartData();
  }

  getchartData() {
    this.subscripe?.unsubscribe();
  
    this.subscripe = this._ChartDataService.getBarData().subscribe({
      next: data => {
        this.barData = data[this.barTime].data.map((item: any) => ({
          name: item.label,
          value: item.value
        }));
      }
    });
  }
  

  

}
