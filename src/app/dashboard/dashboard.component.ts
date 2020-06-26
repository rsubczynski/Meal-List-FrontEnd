import { DashboardService } from './../services/dashboard/dashboard.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data: any;
  labels: string[] = [];
  dataChart: number[] = [];

  constructor(dashboardService: DashboardService) {
    dashboardService.getDishSummary().subscribe(data => {
      dashboardService.sortList(data).
        forEach(row => {
          this.labels.push(row.name),
            this.dataChart.push(row.count);
        });

      this.data = {
        labels: this.labels,
        datasets: [
          {
            data: this.dataChart,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#AFCE56'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#AFCE56'
            ]
          }]
      };
    });
  }
}
