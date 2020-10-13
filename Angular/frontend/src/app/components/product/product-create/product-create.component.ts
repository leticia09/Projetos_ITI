import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }
  //atributoLegal = "qualquer";

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createPodruct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    })
   

  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

  // fazerAlgo(): void {
  //   console.log("fazendo algo");
  // }
}
