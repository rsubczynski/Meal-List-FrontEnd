import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {

  onRowSelect(event: any) {
    console.log(event.data.name);
  }

  convertValue(event: any) {
    return (<HTMLInputElement>event.target).value
  }

  select: any;
  dishes: { name: string; type: string; protein: number; carbohydrate: number; fat: number; kcal: number; }[];
  cols: { field: string; header: string; }[];
  constructor() {
    this.dishes = [
      {
        name: 'Owsianka z bananem, suszonymi śliwkami i migdałami 1',
        type: 'śniadanie',
        protein: 20,
        carbohydrate: 88,
        fat: 16,
        kcal: 575
      },
      {
        name: 'Owsianka z bananem, suszonymi śliwkami i migdałami 2',
        type: 'śniadanie',
        protein: 20,
        carbohydrate: 90,
        fat: 16,
        kcal: 600
      },
      {
        name: 'Owsianka z bananem, suszonymi śliwkami i migdałami 3',
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

}


