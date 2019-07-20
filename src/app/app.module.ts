import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipe/recipe.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListSerice } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,
    SharedModule,
    AuthModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
