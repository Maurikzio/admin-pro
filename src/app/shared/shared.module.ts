import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from '../app-routing.module';
//tambien podriamos importar el RouterMOdule de angular que es el que contiene de igual manera el router-outlet
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    AppRoutingModule //debemos importar esto en este modulo ya que se hace uso del router-outlet
    //RouterModule -> esto nos dara el mismo reusltado que utilizando el AppRputingModule
  ]
})
export class SharedModule { }
