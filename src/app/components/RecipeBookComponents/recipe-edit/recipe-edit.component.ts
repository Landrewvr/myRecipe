
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = (this.id) ? true : false;
    });
    this.initForm();
  }

  private initForm()  {
    let id = 0;
    let name = '';
    let imagePath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);
    
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      id = recipe.id;
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if(recipe.ingredients && recipe.ingredients.length) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[0-9]+[1-9]*$/)]) 
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
        'id': new FormControl(id),
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    })
  }


  get ingredientsControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    if(this.editMode) {
      this.recipeService.editRecipe(this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    } 
    this.resetForm();
  }
  clear() {
    this.recipeForm.reset({
      'name': 'mmg1'
    })
  }

  resetForm() {
    this.recipeForm.reset();
    this.editMode = false;
    if (this.id) {
      this.router.navigate(['recipes', this.id]);
    } else {
      this.router.navigate(['recipes']);
    }
    
  }

  addIngredients() {
    const newIngredient = new FormGroup(
      {
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+[1-9]*$/)]) 
      }
    );
    (<FormArray>this.recipeForm.get('ingredients')).push(newIngredient);
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
