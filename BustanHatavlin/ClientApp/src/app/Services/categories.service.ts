import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Categories from '../Models/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  base_url = `https://localhost:7084/api/categories`;

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.base_url);
  }

  constructor(private http: HttpClient) { }
}
