import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categories} from '../Models/categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl ='';

  constructor(private http: HttpClient) { }



  private jwtToken = 'Our-jwt-token';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken}`
    });
  }

  create(categoryData : any) : Observable<Categories>{
    return this.http.post<Categories>(`${this.apiUrl}/create`, categoryData , { headers: this.getHeaders() });
  
  }
  findAll() : Observable<Categories[]>{
    return this.http.get<Categories[]>(`${this.apiUrl}/findall` , { headers: this.getHeaders() });
  }
  search(categoryName: string): Observable<Categories[]> {
    const url = `${this.apiUrl}/search?categoryName=${categoryName}`; 

    
    return this.http.get<Categories[]>(url , { headers: this.getHeaders() });
  }
  get(id : string) : Observable<Categories>{
    return this.http.get<Categories>(`${this.apiUrl}/get/${id}` , { headers: this.getHeaders() });

  }
  update(id: number, categoryName: Categories): Observable<void> {
    const url = `${this.apiUrl}/categories/${id}`;

    return this.http.put<void>(url, categoryName , { headers: this.getHeaders() });
  }
 
  delete(id: String): Observable<void> {
      const url = `${this.apiUrl}/categories/${id}`; 
      
      return this.http.delete<void>(url , { headers: this.getHeaders() });
  }
  

}
