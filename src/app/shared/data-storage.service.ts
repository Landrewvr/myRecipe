import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../components/RecipeBookComponents/models/Classes/recipe";
import { RecipeService } from "../services/recipe/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {

    }

    storeRecipes() {
        const recipe: Recipe[] = this.recipeService.getRecipes();
        return this.http.put('https://myrecipe-bf2b2-default-rtdb.firebaseio.com/recipes.json', recipe);
    }

    fetchRecipes() {
        return this.http.get('https://myrecipe-bf2b2-default-rtdb.firebaseio.com/recipes.json');
    }
}