import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  token: any;

  constructor(private http: HttpClient) { }

  // getSuggestions(searchText:string){
  //   this.token = localStorage.getItem("token");
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
  //   let params = new HttpParams();
  //   params = params.append("query",searchText);
  //   const options = {params,headers};
  //   return this.http.get("http://localhost:9000/suggestions" , options);
  // }
  // getAllProducts(){
  //   this.token = localStorage.getItem("token");
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  //   console.log(this.token);
  //   return this.http.get("http://localhost:9000/products", { headers });
  // }
}  
