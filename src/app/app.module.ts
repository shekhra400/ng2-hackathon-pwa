import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import {MyNewServiceService} from './my-new-service.service';
import { HomeService } from './home.service';
import { ProductlistService } from './product-list/product-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomeComponent,
      },
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: 'details',
        component: ProductDetailComponent,
      }
    ])
  ],
  providers: [MyNewServiceService, HomeService, ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
