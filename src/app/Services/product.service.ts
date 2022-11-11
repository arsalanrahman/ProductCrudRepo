import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  addProductRequest(formData: FormGroup) {
    return this.http.post(`http:localhost:8080/p-addition`, formData)
  }
}
