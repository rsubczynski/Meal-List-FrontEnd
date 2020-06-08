import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {

  makro = [{ protein: 20, carbohydrate: 88, fat: 16 }];
  chartData: any;

  constructor() {
    this.chartData = {
      labels: ['Białko', 'Węglowodany', 'Tłuszcze'],
      datasets: [
        {
          data: [this.makro[0].protein, this.makro[0].carbohydrate, this.makro[0].fat],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ]
        }]
    };
  }

  ingredients = [
    { name: 'Płatki gryczane', gram: 55 },
    { name: 'Migdały', gram: 12 },
    { name: 'Banan', gram: 170 },
    { name: 'Suszone śliwki', gram: 25 },
    { name: 'Jogurt naturalny 2%', gram: 210 },
  ];
}
