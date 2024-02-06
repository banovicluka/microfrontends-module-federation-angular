import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThemeState } from '../state/theme/theme.state';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import * as LanguageSelectors from '../state/language/language.selectors';
import * as ThemeActions from '../state/theme/theme.actions';
import * as ThemeSelectors from '../state/theme/theme.selectors';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  currentTheme$: Observable<string>;

  currentLanguage$: Observable<string>;

  constructor(private store:Store<ThemeState>, private translate:TranslateService, private http:HttpClient){

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

  getMessages(){{
    return this.http.get("http://localhost:9000/messages");
  }}

  sendReply(message:any, userId:any){
    const obj = {
      content: message
    }
    return this.http.post("http://localhost:9000/messages/reply/" + userId, obj);
  }
}
