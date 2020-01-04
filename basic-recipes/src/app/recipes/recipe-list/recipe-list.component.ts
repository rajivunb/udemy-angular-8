import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGETMkkSgrF-xskp6UZCGh16AUQgdWrNq0BpgC_l91YNRTmMcO'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGETMkkSgrF-xskp6UZCGh16AUQgdWrNq0BpgC_l91YNRTmMcO')
  ];

  constructor() { }

  ngOnInit() {
  }

}
