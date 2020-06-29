import { Dish } from 'src/app/entry/Dish';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  DISH_URL = environment.apiUrl +  'apiV1/dish/';

  constructor(private http: HttpClient) {
    console.log(environment.production);
  }

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(this.DISH_URL + id);
  }
}
