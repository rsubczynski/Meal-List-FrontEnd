import { DishListService } from './../services/dish-list-service/dishList.service';
import { Dish } from './../entry/Dish';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {

  select: any;
  dishes: Dish[] = [];
  cols: { field: string; header: string; }[];

  constructor(dishService: DishListService) {
    this.dishes = [
      {
        name: 'Jajecznica',
        type: 'śniadanie',
        protein: 20,
        carbohydrate: 88,
        fat: 16,
        kcal: 575
      },
      {
        name: 'Omlet',
        type: 'śniadanie',
        protein: 20,
        carbohydrate: 90,
        fat: 16,
        kcal: 600
      },
      {
        name: 'Owsianka ',
        type: 'śniadanie',
        protein: 20,
        carbohydrate: 88,
        fat: 16,
        kcal: 700
      }];

    this.cols = [
      { field: 'name', header: 'Nazwa' },
      { field: 'type', header: 'Typ' },
      { field: 'protein', header: 'Białko' },
      { field: 'carbohydrate', header: 'Węglowodany' },
      { field: 'fat', header: 'Tłuszcz' },
      { field: 'kcal', header: 'Kcal' }
    ];
  }

  convertValue(event: any): string {
    return (<HTMLInputElement>event.target).value
  }

  onRowSelect(event: any): void {
    console.log(event.data.name);
  }

}


