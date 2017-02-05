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
import { ProductlistService } from './product-list/product-list.service';
import { HomeService } from './home/home.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent,
      },
      {
        path: 'list/:id',
        component: ProductListComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailComponent,
      }
    ])
  ],
  providers: [MyNewServiceService, HomeService, ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
