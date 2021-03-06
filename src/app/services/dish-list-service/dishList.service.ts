import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DishMakro } from 'src/app/entry/DishMakro';

@Injectable({
  providedIn: 'root'
})
export class DishListService {

  DISH_MAKRO_LIST_URL = environment.apiUrl +  'apiV1/dish';

  constructor(private http: HttpClient) {
    console.log(environment.production);
  }

  getAllMakroDishes(): Observable<DishMakro[]> {
    return this.http.get<DishMakro[]>(this.DISH_MAKRO_LIST_URL);
  }
}
