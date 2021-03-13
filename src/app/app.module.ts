import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/ShoppingListComponents/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/ShoppingListComponents/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './components/RecipeBookComponents/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/RecipeBookComponents/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/RecipeBookComponents/recipes/recipes.component';
import { RecipesItemComponent } from './components/RecipeBookComponents/recipes-item/recipes-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { ShoppingListService } from './services/shoppingList/shopping-list.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NoRecipeSelectedComponent } from './components/RecipeBookComponents/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './components/RecipeBookComponents/recipe-edit/recipe-edit.component';
import { RecipeService } from './services/recipe/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipesItemComponent,
    DropdownDirective,
    NoRecipeSelectedComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
   bootstrap: [AppComponent]
})
export class AppModule { }

