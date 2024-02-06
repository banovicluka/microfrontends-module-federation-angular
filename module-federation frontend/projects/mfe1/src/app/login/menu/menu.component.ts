import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThemeState } from '../../state/theme/theme.state';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from '../content.service';
import * as LanguageSelectors from '../../state/language/language.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  currentLanguage$: Observable<string>;

  constructor(private store:Store<ThemeState>, private translate:TranslateService, private service: ContentService
    , private router:Router, private route:ActivatedRoute){
    // this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));

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

  getTheme(){
    return this.service.currentTheme$;
  }

  goToCategories(){
    this.router.navigate(['../categories'], {relativeTo: this.route });
  }

  goToUsers(){
    this.router.navigate(['../users'], { relativeTo: this.route });
  }

  goToLogs(){
    this.router.navigate(['../logs'], { relativeTo: this.route });
  }

  goToBaseUrl(){
    this.router.navigate(['/']);
  }
}
