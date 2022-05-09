import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Products from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  base_url = `https://localhost:7084/api/Products`;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
}

  getProducts(id:number): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.base_url}/${id}`);
  }

  getProductsById(id:number): Observable<Products> {
    return this.http.get<Products>(`${ this.base_url}/${id}` );
  }

  addProducts(prod:Products) {
    return this.http.post<Products>(this.base_url, prod, { headers: this.headers });
  }

  updateProducts(prod: Products,id:number) {
    return this.http.put<Products>(this.base_url, prod);

  }

  deleteProducts(id:number) {
    return this.http.delete<Products>(`${this.base_url}/${id}`);

  }
}
