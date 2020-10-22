import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductCreateComponent } from './product-create/product-create.component';
//import { HttpClientModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
//import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
//import { url } from 'inspector';

// esse decorate está dizendo que essa classr pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-erro'] : ['msg=sucess']
    });

  }

  create(product: Product): Observable<Product> {
    // essa função vai adicionar um produto no backend, vai interagir com o backend
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  errorHandle(e: any): Observable<any>{
    this.showMessage('Erro!', true);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }


}
