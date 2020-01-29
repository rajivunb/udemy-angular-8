import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 01',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGETMkkSgrF-xskp6UZCGh16AUQgdWrNq0BpgC_l91YNRTmMcO',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Recipe 02',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ilsMeWfguU1SpgnpajaKu_C7-kO7W2x54heCefhjsyaggw7S',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // Retorna uma cópia para evitar acesso direto (reference type)
    return this.recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    if (this.recipes[id]) {
      return this.recipes[id];
    } else {
      return null;
    }
  }
}
