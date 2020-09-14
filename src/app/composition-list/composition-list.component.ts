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
  displayBasic2 = false;
  ingredientToDelete!: Ingredient;


  profileForm = new FormGroup({
    name: new FormControl(''),
    protein: new FormControl(''),
    carbohydrate: new FormControl(''),
    fat: new FormControl(''),
    kcal: new FormControl(''),
  });

  constructor(private componentsServiceService: ComponentsServiceService, private ingredientService:
  ComponentsServiceService ) {
    this.updateDishesTable();

    this.cols = [
      { field: 'name', header: 'Nazwa' },
      { field: 'protein', header: 'Białko' },
      { field: 'carbohydrate', header: 'Węglowodany' },
      { field: 'fat', header: 'Tłuszcz' },
      { field: 'kcal', header: 'Kcal' },
      { field: 'id', header: 'Akcje' }
    ];
  }

  updateDishesTable(): void{
    this.componentsServiceService.getAllComponents().subscribe(result =>  this.dishes = result);
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

delateIngredient(): void {
    this.displayBasic2 = true;
    this.ingredientService.deleteIngredient(this.ingredientToDelete.id)
      .subscribe(() => {
        this.updateDishesTable();
        this.displayBasic2 = false;
      },
      () => {
        //TODO: fix in future;
        console.log("gdzies używane");
        this.displayBasic2 = false;
      }
      );
}

onSubmit(): void {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

showDelateDialog(ingredient: Ingredient): void {
  this.ingredientToDelete = ingredient;
  this.displayBasic2 = true;
}

}
