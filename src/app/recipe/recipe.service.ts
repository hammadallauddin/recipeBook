import { Subject } from 'rxjs/Subject';
import { ShoppingListSerice } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";

@Injectable()

export class RecipeService {

  constructor(private shoppingListService: ShoppingListSerice) {}
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Biryani',
      'Description of Biryani',
      'http://zaiqaedeccan.com/wp-content/uploads/2015/09/d815e816-4664-472e-990b-d880be41499f-chicken-biryani-recipe.jpg',
      [
        new Ingredient('Beef', 2),
        new Ingredient('rice', 100),
      ]),

    new Recipe(
      'IceCream',
      'Description of Icecream',
      'https://content4.jdmagicbox.com/comp/madurai/m9/0452px452.x452.110607113019.p9m9/catalogue/arun-ice-cream-madurai-city-madurai-ice-cream-parlours-3j1hr7t.jpg',
      [
        new Ingredient('ice', 2),
        new Ingredient('cream', 100),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
