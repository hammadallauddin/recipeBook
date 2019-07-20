import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'recipes' , loadChildren: './recipe/recipes.module#RecipesModule' },
  {path: 'shopping-list' , loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
  {path: 'signup' , component: SignupComponent},
  {path: 'signin' , component: SigninComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
