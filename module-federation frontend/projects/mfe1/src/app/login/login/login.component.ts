import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeState } from '../../state/theme/theme.state';
import { Store, select } from '@ngrx/store';
import * as ThemeSelectors from '../../state/theme/theme.selectors';
import * as ThemeActions from '../../state/theme/theme.actions';
import { TranslateService } from '@ngx-translate/core';
import * as LanguageSelectors from '../../state/language/language.selectors'
import * as TitleSelectors from '../../state/title/title.selectors';
import { ContentService } from '../content.service';
import { Title } from '@angular/platform-browser';
import { TitleState } from '../../state/title/title.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide:any = true;
  username:any;
  password:any;
  info:any;

  // currentTheme$: Observable<string>;

  currentLanguage$: Observable<string>;

  currentTitle$:Observable<string>;



  constructor(private authService: AuthService, private router: Router, private store:Store<ThemeState>, private translate:TranslateService
    , private service: ContentService, private route:ActivatedRoute, private titleService: Title, private titleStore: Store<TitleState>){
    // this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));

    this.currentLanguage$ = this.store.pipe(select(LanguageSelectors.selectLanguage));
    this.translate.setDefaultLang('sr');
    this.currentLanguage$.subscribe((language:string)=>{
      if(language === 'sr')
          this.translate.setDefaultLang('sr')
      else{
          this.translate.setDefaultLang('en');
        }
    });
    
    this.currentTitle$ = this.titleStore.pipe(select(TitleSelectors.selectTitle));

    this.currentTitle$.subscribe((title:string)=>{
      this.titleService.setTitle(title);
    });

  }

  

  changeTheme(event:any){
    const theme = event.checked ? "theme2" : "theme1";
    this.store.dispatch(ThemeActions.changeTheme({theme}));
  }

  onSubmit(){
    console.log("sdsdsd");
    this.authService.findUser(this.username,this.password).subscribe((data: any) =>{
       if(data){
        this.authService.adminUsername = this.username;
        this.authService.adminId = data.id;
        this.authService.adminInfomation = data;
        this.authService.setLoggedUser(data);
        this.authService.setLoggedIn(true);
        this.router.navigate(['menu'], { relativeTo: this.route });
        // this.router.navigateByUrl('/admin/menu');
       }
       else{
        this.info = "Logovanje nije uspjelo";
       }
    });
  }

  getTheme(){
    return this.service.currentTheme$;
  }

  goToBaseUrl(){
    this.router.navigate(['/']);
  }
}
