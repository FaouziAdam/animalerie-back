import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Products } from '../Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl ='';

  constructor(private http: HttpClient) {
   }

   private jwtToken = 'Our-jwt-token';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken}`
    });
  }
  create(productData : any) : Observable<Products>{
    return this.http.post<Products>(`${this.apiUrl}/create`, productData , { headers: this.getHeaders() });
  }
  findAll() : Observable<Products[]>{
    return this.http.get<Products[]>(`${this.apiUrl}/findall` , { headers: this.getHeaders() });
  }
  search(productName: string): Observable<Products[]> {
    const url = `${this.apiUrl}/search?productName=${productName}`; 

    
    return this.http.get<Products[]>(url , { headers: this.getHeaders() });
  }
  get(id : string) : Observable<Products>{
    return this.http.get<Products>(`${this.apiUrl}/get/${id}` , { headers: this.getHeaders() });

  }
  update(id: number, product: Products): Observable<void> {
    const url = `${this.apiUrl}/products/${id}`;

    return this.http.put<void>(url, product , { headers: this.getHeaders() });
  }
 
  delete(id: String): Observable<void> {
      const url = `${this.apiUrl}/products/${id}`; 
      
      return this.http.delete<void>(url , { headers: this.getHeaders() });
  }

}
