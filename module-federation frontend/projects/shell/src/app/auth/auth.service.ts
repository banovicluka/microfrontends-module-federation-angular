import { AnimateTimings } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  private loggedIn: boolean = false;
  private loggedUser: any;
  public username!: string;
  userId!: number;
  userInfomation: any;

  constructor() { }

  setLoggedIn(loggedIn :boolean){
    this.loggedIn = loggedIn;
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }

  setLoggedUser(loggedUser: any){
    this.loggedUser = loggedUser;
  }

  getLoggedUser(): any {
    return this.loggedUser;
  }


}
