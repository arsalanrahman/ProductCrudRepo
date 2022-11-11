import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formData: FormData | undefined

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
   
console.log(formData.value);
    

    this.productService.addProductRequest(formData.value).subscribe({
      next(value) {
          console.log(value);

      },
      error(err) {
          console.log(err);

      },
    })


  }


}
