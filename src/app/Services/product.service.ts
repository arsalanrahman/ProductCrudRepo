import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from 'src/app/Model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  addProductRequest(formData: FormData) {
    return this.http.post("http://localhost:8080/p-addition", formData)
  }
}
