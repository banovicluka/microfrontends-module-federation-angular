import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServisService{

  //products: any[]=[];

  constructor(private http: HttpClient){

  }

  // doGet(){
  //   return Array.of("nikola","marko","luka");
  // }

  // ngOnInit(){
  //   //this.doGet();
  // }

  doGet(){
   return this.http.get("http://localhost:9000/administrators");
  }

}
