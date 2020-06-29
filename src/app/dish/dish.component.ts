import { DishMakro } from 'src/app/entry/Dish';
import { DishService } from './../services/components/dish-service/dish.service';
import { Component } from '@angular/core';
import { IngredientsDish } from '../entry/IngredientsDish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  ingredients: IngredientsDish[] = [];
  makro: DishMakro;
  chartData: any;
  recipe: string[] = [];


  constructor(dishService: DishService) {
    dishService.getDish().subscribe(response => {
      this.ingredients = response.ingredientsList;
      this.recipe = response.descriptions;
      this.makro = response.makroDish;
      this.chartData = {
        labels: ['Białko', 'Węglowodany', 'Tłuszcze'],
        datasets: [
          {
            data: [this.makro.protein, this.makro.carbohydrate, this.makro.fat],
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

    });
  }
}
