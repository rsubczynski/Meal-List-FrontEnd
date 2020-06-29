import { IngredientsDish } from './IngredientsDish';
import { DishMakro } from './DishMakro';

export interface Dish {
  makroDish: DishMakro;
  ingredientsList: IngredientsDish[];
  descriptions: string[];
}
