import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    // Retorna uma cópia para evitar acesso direto (reference type)
    return this.recipes.slice();
  }
}
