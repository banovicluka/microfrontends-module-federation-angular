import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, ɵgetUnknownElementStrictMode } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ThemeState } from '../core/state/theme/theme.state';
import * as ThemeSelectors from '../core/state/theme/theme.selectors'

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  token: any;
  currentProductId: any;
  public activeTab: any;

  public currentTheme$: Observable<string>;

  constructor(private http: HttpClient, private authService: AuthService, private store:Store<ThemeState>) {
    this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));
    //????Dobro razmisli o ovom tokenu i inicijalizaciji. Da li u local storageu ostaje od prethodnog logovanja.
    //this.token = localStorage.getItem("token");
  }

  getAllProducts(params: HttpParams,page:number){
    // this.token = localStorage.getItem("token");
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    // const options = { headers, params };
    // return this.http.get('http://localhost:9000/products?page=' + page + '&size=15', options);
    return this.http.get('http://localhost:9000/products?page=' + page + '&size=15',{params});

  }

  getProductDetails(){
    // this.token = localStorage.getItem("token");
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    // return this.http.get("http://localhost:9000/products/" + this.currentProductId ,{headers});
    return this.http.get("http://localhost:9000/products/" + this.currentProductId );
  }


  getCommentsOfProduct(){
    // this.token = localStorage.getItem("token");
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    // return this.http.get("http://localhost:9000/products/" + this.currentProductId + "/comments", {headers});
    return this.http.get("http://localhost:9000/products/" + this.currentProductId + "/comments");
  }

  addAnswerOnComment(comment: any, commentId: number){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    const body = JSON.stringify(comment);
    console.log(body)
    
    return this.http.put("http://localhost:9000/products/" + this.currentProductId + "/comments/"
          + commentId, body, {headers});
  }

  makeAComment(body: any){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post("http://localhost:9000/products/" + this.currentProductId + "/comments", body,{headers});
  }

  getUserIdByUsername(username: string){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.get("http://localhost:9000/users/" + username + "/id", {headers})
  }

  getProfileData(username: string){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.get("http://localhost:9000/users/" + username + "/info", {headers});
  }

  getAllUserOffers(username: string, params: HttpParams){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    const options = { headers, params };
    return this.http.get("http://localhost:9000/users/" + username + "/products", options);
  }

  purchaseProduct(paymentMethod: string){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    const body = {
      paymentMethod: paymentMethod,
      productId: this.currentProductId,
      userId: this.authService.userId
    }
    return this.http.post("http://localhost:9000/purchases", body, {headers})
  }

  getPurchasedProductsOfUser(params: HttpParams){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    const options = { headers, params };
    return this.http.get("http://localhost:9000/purchases/products/" + this.authService.userId, options);
  }

  getAllCategories(){
    // this.token = localStorage.getItem("token");
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    // return this.http.get("http://localhost:9000/categories", {headers});
    return this.http.get("http://localhost:9000/categories");
  }

  getAllCategoryAttributes(categoryId: number){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.get("http://localhost:9000/categories/" + categoryId + "/attributes" , {headers});
  }

   uploadImage(image: File){
    const formData = new FormData();
    formData.append('file', image, image.name);
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.post("http://localhost:9000/upload", formData, {headers, responseType:'text'});
  }

  postImage(image: any){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.post("http://localhost:9000/images", image, {headers});
  }

  postProduct(formValues: any){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.post("http://localhost:9000/products", formValues, {headers});
  }

  postAttributeValues(attributeValue:any){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.post("http://localhost:9000/attributes/values", attributeValue,{headers});
  }

  getSuggestions(searchText:string){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    let params = new HttpParams();
    params = params.append("query",searchText);
    const options = {params,headers};
    return this.http.get("http://localhost:9000/suggestions" , options);
  }

  getProductByProducId(id:number){
    // this.token = localStorage.getItem("token");
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    // return this.http.get("http://localhost:9000/products/" + id ,{headers});
    return this.http.get("http://localhost:9000/products/" + id );
  }

  postMessage(message: any){
    this.token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.post("http://localhost:9000/messages", message,{headers});
  }
}
