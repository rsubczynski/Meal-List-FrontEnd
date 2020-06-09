import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {

  makro = [{ protein: 32, carbohydrate: 11, fat: 22 }];
  chartData: any;
  recipe = [
    { step: '1. Wbij jajka' },
    { step: '2. Wymieszaj.' },
    { step: '4. Jedz' },
  ];


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
    { name: 'Jajka', gram: 55 },
  ];
}
