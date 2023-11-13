import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subcategories} from '../Models/subcategories'; 

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http: HttpClient) { }
  private apiUrl ='';
  

  private jwtToken = 'Our-jwt-token';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken}`
    });
  }

  // add httpHeader to methods, include JWT header in methods 

  create(subcategoryData : any) : Observable<Subcategories>{
    return this.http.post<Subcategories>(`${this.apiUrl}/create`, subcategoryData , { headers: this.getHeaders() });
  
  }
  findAll() : Observable<Subcategories[]>{
    return this.http.get<Subcategories[]>(`${this.apiUrl}/findall` , { headers: this.getHeaders() });
  }
  search(subcategoryName: string): Observable<Subcategories[]> {
    const url = `${this.apiUrl}/search?subcategoryName=${subcategoryName}`; 

    
    return this.http.get<Subcategories[]>(url , { headers: this.getHeaders() });
  }
  get(id : string) : Observable<Subcategories>{
    return this.http.get<Subcategories>(`${this.apiUrl}/get/${id}`);

  }
  update(id: number, subcategoryName: Subcategories): Observable<void> {
    const url = `${this.apiUrl}/subcategories/${id}`;

    return this.http.put<void>(url, subcategoryName , { headers: this.getHeaders() });
  }
 
  delete(id: String): Observable<void> {
      const url = `${this.apiUrl}/subcategories/${id}`; 
      
      return this.http.delete<void>(url , { headers: this.getHeaders() });
  }
  

}



