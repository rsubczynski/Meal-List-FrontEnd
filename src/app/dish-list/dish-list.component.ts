import { DishListService } from './../services/dish-list-service/dishList.service';
import { DishMakro } from '../entry/DishMakro';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { DishPipePipe } from '../pipes/dish-type-pipe.pipe';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {

  select: any;
  dishes: DishMakro[] = [];
  cols: { field: string; header: string; }[];
  selectedRowItem!: DishMakro;
  constructor(dishService: DishListService, private router: Router, private dishTypePipe: DishPipePipe) {
    dishService.getAllMakroDishes().subscribe(data => {
      data.forEach(item => item.type = dishTypePipe.transform(item.type));
      this.dishes = data;
    });


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
    return (event.target as HTMLInputElement).value;
  }

  onRowSelect(event: any): void {
    this.selectedRowItem = event.data;
  }

  handleButtonClick(): void{
    this.router.navigate(['/dish',  this.selectedRowItem.id]);
  }

}


