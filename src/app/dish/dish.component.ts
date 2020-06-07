import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent{

   makro = [{protein: 20, carbohydrate: 88, fat: 16}];
   ingredients = [
     {name: "Płatki gryczane", gram: 55},
     {name: "Migdały", gram: 12},
     {name: "Banan", gram: 170},
     {name: "Suszone śliwki", gram: 25},
     {name: "Jogurt naturalny 2%", gram: 210},
   ];

  constructor() { }


}
