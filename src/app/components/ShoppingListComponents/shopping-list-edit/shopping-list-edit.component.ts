import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../models/Classes/ingredient';
import { NgForm } from '@angular/forms'
import { ShoppingListService } from 'src/app/services/shoppingList/shopping-list.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') fForm: NgForm;
  public onEditIngredient: Subscription;
  public editing: boolean;
  public editingIndex: number;
  public editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.onEditIngredient = this.shoppingListService.onEditIngredient.subscribe((index: number) => {
      this.editing = true;
      this.editingIndex = index;
      this.editedIngredient = this.shoppingListService.ingredientsList[index];
      this.fForm.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      })
    });
  }

  submitForm(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editing) {
      this.shoppingListService.updateIngredient(this.editingIndex, ingredient);
    } else {
    this.shoppingListService.addIngredient(ingredient);
   }
   this.clearForm();
  }

  clearForm() {
    this.fForm.reset();
     this.editing = false;
     this.editingIndex = -1;
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editingIndex);
    this.clearForm();
  }

  ngOnDestroy() {
    this.onEditIngredient.unsubscribe();
    this.clearForm();
  }

}
