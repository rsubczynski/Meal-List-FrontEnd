import { CompositionListComponent } from './composition-list/composition-list.component';
import { DishCreatorComponent } from './dish-creator/dish-creator.component';
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
    path: 'dish/:id',
    component: DishComponent,
  },
  {
    path: 'dish-creator',
    component: DishCreatorComponent,
  },
  {
    path: 'dish-list',
    component: DishListComponent,
  },
  {
    path: 'composition-list',
    component: CompositionListComponent,
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
