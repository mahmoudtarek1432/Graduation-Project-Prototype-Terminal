import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MatBadgeModule } from '@angular/material/badge'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './Services/menu.service';
import { globlas } from './Services/Globals';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatExpansionModule,
    HttpClientModule,
    MatBadgeModule
  ],
  providers: [
    MenuService,
    globlas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
