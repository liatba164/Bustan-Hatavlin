import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Categories from '../../Models/Categories';
import Product from '../../Models/Products';
import StoragesType from '../../Models/StoragesType';
import { CategoriesService } from '../../Services/categories.service';
import { ProductsService } from '../../Services/products.service';
import { StoragesTypeService } from '../../Services/storages-type.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  StorageTypeArr: StoragesType[] = [];
  arrCategories: Categories[] = [];
  new_prod = new Product();
  url: any = "";

  constructor(private serv_products: ProductsService, private serv_category: CategoriesService, private serv_storageType: StoragesTypeService) {
    this.serv_category.getCategories().subscribe(res => {
      this.arrCategories = res
    }, error => { console.error(error) });

    this.serv_storageType.getStoragesType().subscribe(res => {
      this.StorageTypeArr = res
    }, error => { console.error(error) });

  }


  onSelectImg(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event.target != null) {
          this.url = event.target.result;
          this.new_prod.srcImg = this.url
        }
      }
    }
  }

  onSubmit() {
    this.new_prod.idCategory = Number(this.new_prod.idCategory);
    console.log(this.new_prod);

    this.serv_products.addProducts(this.new_prod).subscribe(res => { console.log(res) },
      error => { console.error(error) });
  }

  ngOnInit(): void {
  }

  changeTypeStorage(event: any) {
    this.new_prod.IdStorageType = Number(event.target.value);
  }
}




