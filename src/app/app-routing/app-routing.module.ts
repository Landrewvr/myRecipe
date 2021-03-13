import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { NoRecipeSelectedComponent } from '../components/RecipeBookComponents/no-recipe-selected/no-recipe-selected.component';
import { RecipeDetailComponent } from '../components/RecipeBookComponents/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../components/RecipeBookComponents/recipe-edit/recipe-edit.component';
import { RecipesComponent } from '../components/RecipeBookComponents/recipes/recipes.component';
import { ShoppingListComponent } from '../components/ShoppingListComponents/shopping-list/shopping-list.component';


var routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
    {path: '**',component: NoRecipeSelectedComponent}
  ]},
  {path: 'shoppingList', component: ShoppingListComponent},
  {path:'**', redirectTo: 'recipes', pathMatch: 'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
