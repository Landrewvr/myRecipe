import { Component,Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Recipe } from '../models/Classes/recipe';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;

  ngOnInit(): void {
  }

}
