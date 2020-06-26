import { DishSummary } from './../../entry/DishSummary';
import { environment } from './../../../environments/environment.prod';
import { Ingredient } from './../../entry/Ingredient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  DISH_URL = environment.apiUrl + 'dish/';
  DISH_CATEGORY_LIST_URL = this.DISH_URL + 'dishCategory';

  constructor(private http: HttpClient) { }

  getDishSummary(): Observable<DishSummary[]> {
   return  this.http.get<DishSummary[]>(this.DISH_CATEGORY_LIST_URL);
  }

  getRandomDishId(dishCategory: string): Observable<number> {
    return this.http.get<number>('http://localhost:8080/apiV1/dish/random?type=' + dishCategory);
  }

  sortList(dataChart: DishSummary[]): DishSummary[] {
    const dishSUmmaryList: DishSummary[] = [
      {name: 'Śniadanie', categoryEnum: 'BREAKFAST', count: 0},
      {name: 'Drugie śniadanie', categoryEnum: 'LUNCH', count: 0},
      {name: 'Obiad', categoryEnum: 'DINNER', count: 0},
      {name: 'Kolacja', categoryEnum: 'SUPPER', count: 0}
    ];

    dataChart.forEach(data => {
     dishSUmmaryList.filter( item => item.categoryEnum === data.categoryEnum)
     .forEach(item => item.count = data.count);
    });

    return dishSUmmaryList;
  }

}
