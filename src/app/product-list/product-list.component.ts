import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products;

  constructor(private productService: ProductsService) {
    this.products = productService.products;
  }

  ngOnInit() {
  }

  share() {
    alert("El producto se compartió!!");
  }

  onNotify(){
    alert("Notificación de producto");
  }

}
