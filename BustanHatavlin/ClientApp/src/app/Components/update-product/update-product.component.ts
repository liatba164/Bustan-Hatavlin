import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Products from '../../Models/Products';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  prod = new Products();

  constructor(private aRoute: ActivatedRoute, private serv: ProductsService) {
    ;
    this.serv.getProductsById(this.aRoute.snapshot.params["id"]).subscribe(
      res => {
        this.prod = res;
        console.log(res)
      }, error => { console.error(error) })
  }

  ngOnInit(): void {
  }

}
