import { ComponentsServiceService } from './../services/components/components-service.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../entry/Ingredient';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.css']
})
export class CompositionListComponent implements OnInit {

  display = false;
  dishes!: Ingredient[];
  cols: { field: string; header: string; }[];

  profileForm = new FormGroup({
    name: new FormControl(''),
    protein: new FormControl(''),
    carbohydrate: new FormControl(''),
    fat: new FormControl(''),
    kcal: new FormControl(''),
  });

  constructor(componentsServiceService: ComponentsServiceService, private ingredientService: 
  ComponentsServiceService ) {
    componentsServiceService.getAllComponents().subscribe(dupa =>  this.dishes = dupa);

    this.cols = [
      { field: 'name', header: 'Nazwa' },
      { field: 'protein', header: 'Białko' },
      { field: 'carbohydrate', header: 'Węglowodany' },
      { field: 'fat', header: 'Tłuszcz' },
      { field: 'kcal', header: 'Kcal' },
      { field: 'id', header: 'Akcje' }
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

  showDialog(): void {
    this.display = true;
}

delateIngredient(id: string): void {
    this.ingredientService.deleteIngredient(id);
}

onSubmit(): void {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

}
