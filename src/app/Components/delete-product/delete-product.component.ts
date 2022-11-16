import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorResponse } from 'src/app/Model/error';
import { GetResponse } from 'src/app/Model/response';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  formDataReq: FormData;

  productForm: FormGroup;
  successRes: GetResponse;
  errorRes: ErrorResponse;

  isResponseReceived: boolean = false
  isErrorResponseReceived: boolean = false


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
    })

  }

  ngDoCheck() {

  }

  onSubmit(formData: FormGroup) {

    this.productService.deleteProductRequest(formData.value.productName).subscribe({
      next: res => {
        this.isResponseReceived = true
        this.isErrorResponseReceived = false
        this.successRes = <GetResponse>res
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

  closeAlert() {
    this.isResponseReceived = false
    this.isErrorResponseReceived = false
  }

}
