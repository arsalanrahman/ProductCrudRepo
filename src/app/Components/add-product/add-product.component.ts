import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formData: FormData | undefined

  formInputData = {
    productName: "",
    productShortDescription: "",
    productDetailedDescription: "",
    productCategory: "",
    productPrice: ""
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formData = new FormData();
    this.formData.append("productName", this.formInputData.productName);
    this.formData.append("shortDescription", this.formInputData.productShortDescription);
    this.formData.append("detailedDescription", this.formInputData.productDetailedDescription);
    this.formData.append("category", this.formInputData.productCategory);
    this.formData.append("price", this.formInputData.productPrice);
    this.productService.addProductRequest(this.formData).subscribe(
      (response) => {
        console.log(response);

      }
    );


  }


}
