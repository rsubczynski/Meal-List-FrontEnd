import { DishService } from './../services/components/dish-service/dish.service';
import { Component } from '@angular/core';
import { IngredientsDish } from '../entry/IngredientsDish';
import { ActivatedRoute } from '@angular/router';
import { DishMakro } from '../entry/DishMakro';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  ingredients: IngredientsDish[] = [];
  makro!: DishMakro;
  chartData: any;
  tableData: any[] = [];
  recipe: string[] = [];


  constructor(dishService: DishService, private route: ActivatedRoute) {
    dishService.getDish(this.route.snapshot.params.id).subscribe(response => {
      this.ingredients = response.ingredientsList;
      this.recipe = response.descriptions;
      this.makro = response.makroDish;
      this.tableData = [
        {
          protein: this.makro.protein,
          carbohydrate: this.makro.carbohydrate,
          fat: this.makro.fat
        }];
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
