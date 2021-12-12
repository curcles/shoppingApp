import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]

})
export class CoreModule { }
