import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRequest } from '../Model/create-request';
import { UpdateRequest } from '../Model/update-request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }


  headers = new HttpHeaders();
  
        

  addProductRequest(createRequest: CreateRequest) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    return this.http.post(`http://localhost:8080/p-addition`, createRequest, {headers: this.headers})
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
