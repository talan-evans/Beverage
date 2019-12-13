import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredient/ingredient.component';
import { BeverageComponent } from './beverage/beverage.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [IngredientComponent, BeverageComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IngredientComponent,
    BeverageComponent,
    LoginComponent
  ]
})
export class FeaturesModule { }
