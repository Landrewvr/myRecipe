import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../RecipeBookComponents/models/Classes/recipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onElementSelect = new Subject<string>()

  collapsed = true;

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  loadScreen(screen: string) {
    this.onElementSelect.next(screen);
  }

  saveRecipes() {
    this.dataStorageService.storeRecipes().subscribe(data => {
      console.log(data);
    });
  }

  fetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe((data: Recipe[]) => {
      console.log(data)
      this.recipeService.setRecipes(data);
    });
  }
}
