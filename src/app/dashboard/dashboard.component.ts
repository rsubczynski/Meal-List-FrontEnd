import { DashboardService } from './../services/dashboard/dashboard.service';
import { Component } from '@angular/core';
import { DishSummary } from '../entry/DishSummary';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data: any;
  dataChart: DishSummary[] = [];
  buttonColoursClass = [
    {class: 'ui-button-rounded ui-button-success'},
    {class: 'ui-button-rounded ui-button-info'},
    {class: 'ui-button-rounded ui-button-warning'},
    {class: 'ui-button-rounded ui-button-danger'}];

  constructor(private dashboardService: DashboardService, private router: Router) {
    dashboardService.getDishSummary().subscribe(data => {
      this.dataChart = dashboardService.sortList(data);
      this.data = {
        labels: this.dataChart.map(row => row.name),
        datasets: [
          {
            data: this.dataChart.map(row => row.count),
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

  handleRandomClick(categoryEnum: string): void {
    this.dashboardService.getRandomDishId(categoryEnum)
    .subscribe(
      id => this.router.navigate(['/dish',  id]),
      error => console.log(console.log(error)
      )
    );
}

}
