import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';   
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {MenuModule} from 'primeng/menu';
import { DishListComponent } from './dish-list/dish-list.component';
import { IngrediendsListComponent } from './ingrediends-list/ingrediends-list.component';
import { DishComponent } from './dish/dish.component';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    DishListComponent,
    IngrediendsListComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    MenuModule,
    ChartModule,
    TableModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
