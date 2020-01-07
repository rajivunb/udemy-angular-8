import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Recipe 01',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGETMkkSgrF-xskp6UZCGh16AUQgdWrNq0BpgC_l91YNRTmMcO'
    ),
    new Recipe(
      'Recipe 02',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ilsMeWfguU1SpgnpajaKu_C7-kO7W2x54heCefhjsyaggw7S'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    console.log('RecipeListComponent recipeWasSelected event emmited')
    this.recipeWasSelected.emit(recipe);
  }
}
