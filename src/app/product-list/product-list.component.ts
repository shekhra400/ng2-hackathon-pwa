import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlistContent: any = {};
  constructor(private _productlistService: ProductlistService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList(){
    this._productlistService.getItem('product_list')
      .then((data) => {
        if (data) {
          this.productlistContent = data.productlistContent;
          console.log(this.productlistContent);
        } else {
          this._productlistService.getApiData()
            .subscribe(response => {
              this.productlistContent = response;
              this._productlistService.createItem(this.productlistContent);
            });
        }
      });
  }

}
