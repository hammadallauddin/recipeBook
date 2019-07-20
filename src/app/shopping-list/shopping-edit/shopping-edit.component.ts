import { ShoppingListSerice } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedIndex: number;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('f') form: NgForm;
  constructor(private shoppingListService: ShoppingListSerice) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(this.editedIndex);
          this.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
     );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngerdient(this.editedIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
