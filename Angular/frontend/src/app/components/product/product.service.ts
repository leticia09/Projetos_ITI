import { Product } from './product.model';
import { ProductCreateComponent } from './product-create/product-create.component';
import { HttpClientModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
//import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

// esse decorate está dizendo que essa classr pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })

  }

  create(product: Product): Observable<Product>{
    // essa função vai adicionar um produto no backend, vai interagir com o backend
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}
