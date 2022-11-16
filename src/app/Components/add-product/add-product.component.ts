import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorResponse } from 'src/app/Model/error';
import { Product } from 'src/app/Model/product';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formDataReq: FormData;
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
    this.formDataReq = new FormData();
    this.formDataReq.append("productName", formData.value.productName)
    this.formDataReq.append("shortDescription", formData.value.shortDescription)
    this.formDataReq.append("detailedDescription", formData.value.detailedDescription)
    this.formDataReq.append("category", formData.value.category)
    this.formDataReq.append("price", formData.value.price)


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
