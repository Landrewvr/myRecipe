import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Recipe } from 'src/app/components/RecipeBookComponents/models/Classes/recipe';
import { Ingredient } from 'src/app/components/ShoppingListComponents/models/Classes/ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeEmitter:Subject<Recipe[]> = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Garlic Shrimp',
      'This is the recipe for tasty garlic shrimp',
      'https://www.eatwell101.com/wp-content/uploads/2019/07/healthy-Shrimp-Recipe-1.jpg',
      [new Ingredient('Galic', 1),
      new Ingredient('Shrimp', 20),
      new Ingredient('Onion', 1),
      new Ingredient('Canned tomato paste', 1)]),
    new Recipe(
      2,
      'Roast Beef',
      'This is the recipe for tasty Roast Beef',
      'https://realfood.tesco.com/media/images/RFO-1400x919-Slow-roasted-beef-with-mustard-potatoes-dec8429a-d847-469f-a752-5d789755ea17-0-1400x919.jpg',
      [new Ingredient('Galic', 1),
      new Ingredient('Beef', 1),
      new Ingredient('Onion', 1),
      new Ingredient('Pepper', 1),
      new Ingredient('salt', 1)]),
  ]

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe (id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addRecipe(newRecipe: Recipe) {
    newRecipe.id = this.recipes[this.recipes.length-1].id + 1;
    const recipe = new Recipe(
      newRecipe.id,
      newRecipe.name,
      newRecipe.description,
      newRecipe.imagePath,
      newRecipe.ingredients
    )
    this.recipes.push(recipe);
    this.recipeEmitter.next(this.recipes.slice());
  }

  editRecipe(editedRecipe: Recipe) {
    const recipe = new Recipe(
      editedRecipe.id,
      editedRecipe.name,
      editedRecipe.description,
      editedRecipe.imagePath,
      editedRecipe.ingredients
    )
    const recipeIndex = this.recipes.findIndex(recipe => recipe.id === editedRecipe.id);
    
    this.recipes[recipeIndex] = editedRecipe;
    this.recipeEmitter.next(this.recipes.slice());

  }

  deleteRecipe(deleteRecipe: Recipe) {
    const recipeIndex = this.recipes.findIndex(recipe => deleteRecipe.id === recipe.id);
    this.recipes.splice(recipeIndex, 1);
    this.recipeEmitter.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeEmitter.next(this.recipes.slice());
  }
}
