import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private loggedIn: boolean = false;
  private loggedAdmin: any;
  public adminUsername!: string;
  adminId!: number;
  adminInfomation: any;

  constructor(private http:HttpClient) { }

  setLoggedIn(loggedIn :boolean){
    this.loggedIn = loggedIn;
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }

  setLoggedUser(loggedUser: any){
    this.loggedAdmin = loggedUser;
  }

  getLoggedUser(): any {
    return this.loggedAdmin;
  }

  findUser(username: string,password: string){
    const body = { username, password};
    return this.http.post("http://localhost:9000/administrators",body);
  }
}
