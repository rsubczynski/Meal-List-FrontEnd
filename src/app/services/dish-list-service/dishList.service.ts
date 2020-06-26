import { Ingredient } from './../../entry/Ingredient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/entry/Dish';

@Injectable({
  providedIn: 'root'
})
export class DishListService {

  DISH_LIST_URL = environment.apiUrl +  'apiV1/dish';

  constructor(private http: HttpClient) {
    console.log(environment.production);
  }

  getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.DISH_LIST_URL);
  }
}
