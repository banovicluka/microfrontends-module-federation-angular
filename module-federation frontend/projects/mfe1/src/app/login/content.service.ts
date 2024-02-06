import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ThemeState } from '../state/theme/theme.state';
import { TranslateService } from '@ngx-translate/core';
import * as ThemeSelectors from '../../app/state/theme/theme.selectors';
import * as LanguageSelectors from '../../app/state/language/language.selectors';
import * as ThemeActions from '../../app/state/theme/theme.actions';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  currentTheme$: Observable<string>;

  currentLanguage$: Observable<string>;


  constructor(private store:Store<ThemeState>,
     private translate:TranslateService, private http:HttpClient, private route:ActivatedRoute){
    this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));

    this.currentLanguage$ = this.store.pipe(select(LanguageSelectors.selectLanguage));
    this.translate.setDefaultLang('sr');
    this.currentLanguage$.subscribe((language:string)=>{
      if(language === 'sr')
          this.translate.setDefaultLang('sr')
      else{
          this.translate.setDefaultLang('en');
        }
    })
  
    
  }

  changeTheme(event:any){
    const theme = event.checked ? "theme2" : "theme1";
    this.store.dispatch(ThemeActions.changeTheme({theme}));
  }

  getAllCategories(){
    return this.http.get("http://localhost:9000/categories");
  }

  findAllCategoryAttributes(id:any){
    return this.http.get("http://localhost:9000/categories/" + id + "/attributes");
  }

  updateCategory(category:any){
    return this.http.put("http://localhost:9000/categories", category);
  }

  insertCategory(category:any){
    return this.http.post("http://localhost:9000/categories", category);
  }

  deleteCategory(category:any){
    return this.http.delete("http://localhost:9000/categories/" + category.id);
  }

  insertAttribute(attribute:any){
    return this.http.post("http://localhost:9000/attributes", attribute);
  }

  updateAttribute(attribute:any){
    return this.http.put("http://localhost:9000/attributes", attribute);
  }

  deleteAttribute(attribute:any){
    return this.http.delete("http://localhost:9000/attributes/" + attribute.id);
  }

  insertUser(user:any){
    return this.http.post("http://localhost:9000/users/insert",user);
  }

  updateUser(user:any){
    return this.http.put("http://localhost:9000/users", user);
  }

  deleteUser(user:any){
    return this.http.delete("http://localhost:9000/users/" + user.id);
  }

  findAllUsers(){
    return this.http.get("http://localhost:9000/users");
  }

  findAllLogs(){
    return this.http.get("http://localhost:9000/logs");
  }
}
