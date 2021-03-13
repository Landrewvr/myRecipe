import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../../../services/shoppingList/shopping-list.service';
import { Ingredient } from '../models/Classes/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  public ingredientsObservable: Subscription;

  constructor(private shoppingListService: ShoppingListService) { 
    this.ingredients = shoppingListService.ingredientsList;
    this.ingredientsObservable = this.shoppingListService.onAddIngredients.subscribe(data => {
      this.ingredients = data;
    }) 
  }

  ngOnInit(): void {

  }

  editIngredient(index: number) {
    this.shoppingListService.onEditIngredient.next(index);
  }

  ngOnDestroy() {
    this.ingredientsObservable.unsubscribe();
  }

}
