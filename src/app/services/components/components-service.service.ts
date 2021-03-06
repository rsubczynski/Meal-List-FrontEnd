import { Ingredient } from './../../entry/Ingredient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsServiceService {

  ALL_COMPONENTS_LIST = environment.apiUrl +  'apiV1/ingredient';

  constructor(private http: HttpClient) {
    console.log(environment.production);
  }

  getAllComponents(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ALL_COMPONENTS_LIST);
  }

  deleteIngredient(id: string): Observable<{}>{
    return this.http.delete(this.ALL_COMPONENTS_LIST + '/' + id);
  }
}
