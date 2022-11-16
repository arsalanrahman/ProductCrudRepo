import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateRequest } from '../Model/update-request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  addProductRequest(formData: FormData) {
    return this.http.post(`http://localhost:8080/p-addition`, formData)
  }
  updateProductRequest(updateRequest: UpdateRequest) {
    return this.http.put(`http://localhost:8080/p-update`, updateRequest)
  }
  searchProductRequest(productName: string) {
    return this.http.get(`http://localhost:8080/p-search/${productName}`)
  }
  deleteProductRequest(productName: string) {
    return this.http.delete(`http://localhost:8080/p-delete/${productName}`)
  }
}
