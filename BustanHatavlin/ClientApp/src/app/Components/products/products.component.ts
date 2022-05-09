import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Categories from '../../Models/Categories';
import Products from '../../Models/Products';
import StorageType from '../../Models/StoragesType';
import { CategoriesService } from '../../Services/categories.service';
import { ProductsService } from '../../Services/products.service';
import { StoragesTypeService } from '../../Services/storages-type.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prod: Products[] = [];
  arrCategories: Categories[] = [];
  arrStorageType: StorageType[] = [];
  //base_url = `https://localhost:7084/api/`;
  id: number = 0;

  constructor(private aRoute: ActivatedRoute, private serv_category: CategoriesService, private serv_prod: ProductsService, private serv_storage: StoragesTypeService) {
    this.id = this.aRoute.snapshot.params["id"];

    this.serv_category.getCategories().subscribe(res => {
      this.arrCategories = res;
    })

    this.serv_prod.getProducts(this.id).subscribe(result => {
      this.prod = result;
    }, error => console.error(error));

    this.serv_storage.getStoragesType().subscribe(result => {
      this.arrStorageType = result;
    }, error => console.error(error));
  }

  update(id: number, prod: Products) {
    this.serv_prod.updateProducts(prod,id).subscribe(result => {
      console.log(result)
    }, error => console.error(error));
  }

  delete(id: number) {
    this.serv_prod.deleteProducts(id).subscribe(result => {
      console.log(result)
    }, error => console.error(error));
  }


  ngOnInit(): void {

  }

}
//export interface Product {
//  id: number;
//  name: string;
//  quantity: number;
//  idCategory: number;
//  srcImg: string;
//  IdStorageType: number;
//}
