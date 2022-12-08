import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateRequest } from 'src/app/Model/create-request';
import { ErrorResponse } from 'src/app/Model/error';
import { Product } from 'src/app/Model/product';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formDataReq: CreateRequest;
  publicsuccessRes: Product
  productForm: FormGroup;
  successRes: Product;
  errorRes: ErrorResponse;

  isResponseReceived : boolean = false
  isErrorResponseReceived : boolean = false


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      shortDescription: new FormControl(''),
      detailedDescription: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('')
    })

  }

  ngDoCheck(){
    
  }




  onSubmit(formData: FormGroup) {
    this.formDataReq = {
    productName: formData.value.productName,
    shortDescription: formData.value.shortDescription,
    detailedDescription: formData.value.detailedDescription,
    category: formData.value.category,
    price: formData.value.price
    }
    console.log(this.formDataReq);
    


    this.productService.addProductRequest(this.formDataReq).subscribe({
      next: res => { 
        this.isResponseReceived = true
        this.successRes = <Product>res
        console.log(this.successRes);
      },
      error: err =>{
        console.log(err)
        this.isErrorResponseReceived = true
        this.errorRes = <ErrorResponse>err.error;

      }
    })

  }
}
