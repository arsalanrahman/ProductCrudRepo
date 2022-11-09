import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  addProductRequest(formData: FormData) {
    return this.http.post(`http:localhost:8080/p-addition`, formData)
  }
}