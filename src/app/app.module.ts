import { DishPipePipe } from './pipes/dish-type-pipe.pipe';
import { KcalPipe } from './pipes/kcal-pipe.pipe';
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
import { DishComponent } from './dish/dish.component';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { GramPipePipe } from './pipes/gram-pipe.pipe';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import { CompositionListComponent } from './composition-list/composition-list.component';
import { DishCreatorComponent } from './dish-creator/dish-creator.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    DishListComponent,
    DishComponent,
    GramPipePipe,
    KcalPipe,
    CompositionListComponent,
    DishCreatorComponent,
    DishPipePipe  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    MenuModule,
    ChartModule,
    TableModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule,
    AutoCompleteModule,
    ReactiveFormsModule  ],
  providers: [DishPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
