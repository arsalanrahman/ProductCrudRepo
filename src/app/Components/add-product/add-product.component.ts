import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formDataReq: FormData

  productForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      shortDescription: new FormControl(''),
      detailedDescription: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('')
    })

  }




  onSubmit(formData: FormGroup) {
    this.formDataReq = new FormData();
    this.formDataReq.append("productName", formData.value.productName)
    this.formDataReq.append("shortDescription", formData.value.shortDescription)
    this.formDataReq.append("detailedDescription", formData.value.detailedDescription)
    this.formDataReq.append("category", formData.value.category)
    this.formDataReq.append("price", formData.value.price)


    this.productService.addProductRequest(this.formDataReq).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    })
  }


}
