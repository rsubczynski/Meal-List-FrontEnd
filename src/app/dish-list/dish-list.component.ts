import { DishListService } from './../services/dish-list-service/dishList.service';
import { DishMakro } from '../entry/DishMakro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {

  select: any;
  dishes: DishMakro[] = [];
  cols: { field: string; header: string; }[];

  constructor(dishService: DishListService) {
    dishService.getAllMakroDishes().subscribe(data => this.dishes = data);


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


