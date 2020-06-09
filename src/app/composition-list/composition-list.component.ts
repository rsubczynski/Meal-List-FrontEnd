import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.css']
})
export class CompositionListComponent implements OnInit {

  onRowSelect(event: any) {
    console.log(event.data.name);
  }

  convertValue(event: any) {
    return (<HTMLInputElement>event.target).value
  }

  select: any;
  dishes: { name: string; protein: number; carbohydrate: number; fat: number; kcal: number; }[];
  cols: { field: string; header: string; }[];
  constructor() {
    this.dishes = [
      {
        name: 'Pomidor',
        protein: 1,
        carbohydrate: 4,
        fat: 0,
        kcal: 18
      },
      {
        name: 'Ziemniak',
        protein: 1.8,
        carbohydrate: 15,
        fat: 0.1,
        kcal: 71
      }];

    this.cols = [
      { field: 'name', header: 'Nazwa' },
      { field: 'protein', header: 'Białko' },
      { field: 'carbohydrate', header: 'Węglowodany' },
      { field: 'fat', header: 'Tłuszcz' },
      { field: 'kcal', header: 'Kcal' }
    ];
  }

  ngOnInit(): void {
  }

}
