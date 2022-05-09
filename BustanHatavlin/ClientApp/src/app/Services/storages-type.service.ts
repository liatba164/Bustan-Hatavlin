import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StorageType from '../Models/StoragesType';

@Injectable({
  providedIn: 'root'
})
export class StoragesTypeService {
  base_url = `https://localhost:7084/api/StorageTypes`;

  constructor(private http: HttpClient) { }

  getStoragesType(): Observable<StorageType[]> {
    return this.http.get<StorageType[]>(this.base_url);
  }
  
}
