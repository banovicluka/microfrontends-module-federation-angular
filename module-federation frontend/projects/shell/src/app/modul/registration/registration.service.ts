import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThemeState } from '../../core/state/theme/theme.state';
import * as ThemeSelectors from '../../core/state/theme/theme.selectors'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  token:any;
  private pin: string | undefined;
  
  currentTheme$:Observable<string>;

  constructor(private http: HttpClient, private store: Store<ThemeState>) {
    this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));
  }

  postUser(user:any) {
    // this.token = localStorage.getItem("token");
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );
    return this.http.post("http://localhost:9000/users",user);
    //console.log(user);
  }

  getPin(){
    return this.pin;
  }

  setPin(pin:string){
    this.pin = pin;
  }
}
