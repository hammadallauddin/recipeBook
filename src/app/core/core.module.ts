import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListSerice } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe/recipe.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    ShoppingListSerice,
    RecipeService,
    DataStorageService,
    AuthService,
  ],
})
export class CoreModule {}
