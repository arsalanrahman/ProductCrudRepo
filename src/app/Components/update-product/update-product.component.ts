import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorResponse } from 'src/app/Model/error';
import { Product } from 'src/app/Model/product';
import { UpdateRequest } from 'src/app/Model/update-request';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  formDataReq: UpdateRequest;
  publicsuccessRes: Product
  productForm: FormGroup;
  successRes: Product;
  errorRes: ErrorResponse;

  isResponseReceived: boolean = false
  isErrorResponseReceived: boolean = false


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      shortDescription: new FormControl(''),
      detailedDescription: new FormControl(''),
      price: new FormControl('')
    })

  }

  ngDoCheck() {

  }

  onSubmit(formData: FormGroup) {
    this.formDataReq = {
      productName: formData.value.productName,
      shortDescription: formData.value.shortDescription,
      detailedDescription: formData.value.detailedDescription,
      price: formData.value.price
    }


    this.productService.updateProductRequest(this.formDataReq).subscribe({
      next: res => {
        this.isResponseReceived = true
        this.isErrorResponseReceived = false
        this.successRes = <Product>res
        console.log(this.successRes);
      },
      error: err => {
        console.log(err)
        this.isResponseReceived = false
        this.isErrorResponseReceived = true
        this.errorRes = <ErrorResponse>err.error;
      }
    })                                                  
  }
}
