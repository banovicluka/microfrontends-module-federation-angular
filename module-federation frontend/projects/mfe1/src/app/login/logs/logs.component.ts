import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { Observable } from 'rxjs';
import { ThemeState } from '../../state/theme/theme.state';
import { TranslateService } from '@ngx-translate/core';
import * as LanguageSelectors from '../../state/language/language.selectors';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {

  logs:any[] = [];

  currentLanguage$: Observable<string>;

  constructor(private service:ContentService,private store: Store<ThemeState>, private translate: TranslateService
    , private router:Router, private route: ActivatedRoute){

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

  ngOnInit(){
    this.service.findAllLogs().subscribe((data:any)=>{
      this.logs = data;
    });
  }

  getTheme(){
    return this.service.currentTheme$;
  }

  goBack(){
    this.router.navigate(['../menu'], { relativeTo: this.route });
  }
}
