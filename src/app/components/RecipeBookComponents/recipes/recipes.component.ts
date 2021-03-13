import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Recipe } from '../models/Classes/recipe';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
