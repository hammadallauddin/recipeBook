import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { NgModule } from '@angular/core';

const recipesReoutes: Routes = [
  {path: '' , component: RecipeComponent , children: [
    {path: '', component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    {path: ':id', component: RecipeDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent , canActivate: [AuthGuardService] }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesReoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})

export class RecipesRoutingModule {}
