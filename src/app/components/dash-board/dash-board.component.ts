import { Component } from '@angular/core';
import { AnalyticsComponent } from "../analytics/analytics.component";
import { ReportComponent } from "../report/report.component";
import { RecentOrdersComponent } from "../recent-orders/recent-orders.component";

@Component({
  selector: 'app-dash-board',
  imports: [AnalyticsComponent, ReportComponent, RecentOrdersComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {

}
