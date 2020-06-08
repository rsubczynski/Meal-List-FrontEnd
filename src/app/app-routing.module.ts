import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishComponent } from './dish/dish.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishListComponent } from './dish-list/dish-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    data: { page: 'Home page' }
  },
  {
    path: 'dish',
    component: DishComponent,
  },
  {
    path: 'dish-list',
    component: DishListComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
