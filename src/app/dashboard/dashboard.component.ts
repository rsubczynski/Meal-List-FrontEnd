import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  data: any;

  constructor() {
      this.data = {
          labels: ['Śniadanie', 'Drugie Sniadanie', 'Obiad', 'Kolacja'],
          datasets: [
              {
                  data: [10, 20, 30, 40],
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
  }

}
