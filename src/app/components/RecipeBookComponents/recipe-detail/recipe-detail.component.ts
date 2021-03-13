import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { ShoppingListService } from 'src/app/services/shoppingList/shopping-list.service';
import { Recipe } from '../models/Classes/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.recipe = this.recipeService.getRecipe(+params['id'])
    })
  }

  addToShoppingList() {
    this.shoppingListService.ingredientsConcat = this.recipe.ingredients;
  }

  editRecipe() {
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['recipes'])
  }

}
