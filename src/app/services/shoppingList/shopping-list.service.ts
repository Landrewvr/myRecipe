import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../../components/ShoppingListComponents/models/Classes/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

 onAddIngredients = new Subject<Ingredient[]>();
 onEditIngredient = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Shrimp',25),
    new Ingredient('Garlic cove', 8),
    new Ingredient('Tomato', 5),
  ];

  constructor() { }

  
  get ingredientsList() : Ingredient[] {
    return  this.ingredients.slice();
  }

  set ingredientsSustitute(list: Ingredient[]) {
    this.ingredients = list;
  }

  set ingredientsConcat(list: Ingredient[]) {
    this.ingredients = this.ingredients.concat(list);
  }

  

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onAddIngredients.next(this.ingredients.slice());
  }

  updateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.onAddIngredients.next(this.ingredients.slice())
  }

  deleteIngredient(index) {
    this.ingredients.splice(index, 1);
    this.onAddIngredients.next(this.ingredients.slice())
  }
}
