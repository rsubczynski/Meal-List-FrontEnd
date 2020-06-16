import { ComponentsServiceService } from './../services/components/components-service.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../entry/Ingredient';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.css']
})
export class CompositionListComponent implements OnInit {

  dishes!: Ingredient[];
  cols: { field: string; header: string; }[];
  constructor(componentsServiceService: ComponentsServiceService) {
    componentsServiceService.getAllComponents().subscribe(dupa =>  this.dishes = dupa);

    this.cols = [
      { field: 'name', header: 'Nazwa' },
      { field: 'protein', header: 'Białko' },
      { field: 'carbohydrate', header: 'Węglowodany' },
      { field: 'fat', header: 'Tłuszcz' },
      { field: 'kcal', header: 'Kcal' }
    ];
  }
  onRowSelect(event: any): void {
    console.log(event.data);
  }

  convertValue(event: any): string {
    return (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
