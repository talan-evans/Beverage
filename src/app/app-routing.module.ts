import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientComponent } from './features/ingredient/ingredient.component';
import { LoginComponent } from './features/login/login.component';


const routes: Routes = [
  {
    path: 'ingredient/:id',
    component: IngredientComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
