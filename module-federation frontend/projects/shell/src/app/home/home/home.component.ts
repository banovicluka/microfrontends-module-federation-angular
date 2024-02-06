import { Component, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ContentService } from '../../content/content.service';
import { PublishAdModalComponent } from '../../content/publish-ad-modal/publish-ad-modal.component';

import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ThemeState } from '../../core/state/theme/theme.state';
import * as ThemeSelectors from '../../core/state/theme/theme.selectors';
import * as ThemeActions from '../../core/state/theme/theme.actions';
import { TranslateService } from '@ngx-translate/core';
import * as LanguageActions from '../../core/state/language/language.actions'; 
import * as TitleActions from '../../core/state/title/title.actions';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog`;
  loggedUser: any;
  products:any[] = [];
  loggedIn: boolean = false;
  isSideNavigationOpen:boolean=false;
  
  // suggestions:string[]=[];
  // searchText:string="";

  currentTheme$: Observable<string>;

  // ngOnInit(){
  //   this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));
  // }

  currentLang:any;
  
  constructor(private service: HomeService, private authService: AuthService, private router: Router, private contentService: ContentService
    ,private dialog: MatDialog, private store:Store<ThemeState>, private translate: TranslateService, private titleService:Title){
    
    this.loggedUser = this.authService.getLoggedUser();

    this.currentTheme$ = this.store.pipe(select(ThemeSelectors.selectTheme));

    this.translate.setDefaultLang('sr');
    this.currentLang = this.translate.currentLang;

    
  }

  changeTheme(event:any){
    const theme = event.checked ? "theme2" : "theme1";
    this.store.dispatch(ThemeActions.changeTheme({theme}));
  }

  changeLanguage(){
    if(this.currentLang === "en"){
      this.translate.use('sr');
      this.currentLang = 'sr';
      const language = 'sr';
      this.store.dispatch(LanguageActions.changeLanguage({language}));
    }
    else{
      this.translate.use('en');
      this.currentLang = 'en';
      const language = 'en';
      this.store.dispatch(LanguageActions.changeLanguage({language}));
    }
  }

  checkLanguage(){
    if(this.currentLang === "en"){
      return true;
    }else return false;
  }

  changeTitle(mfe:any){
    const title = "Shell -> " + mfe;
    this.store.dispatch(TitleActions.changeTitle({title}));
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  toggleSideNavigation(){
    this.isSideNavigationOpen = !this.isSideNavigationOpen;
  }

  profileNavigator(tabIndex: number){
      this.contentService.activeTab = tabIndex;
  }

  logout(){
    this.authService.setLoggedUser(null);
    this.authService.setLoggedIn(false);
    this.authService.userId=0;
    this.authService.userInfomation=null;
    this.authService.username="";
    this.router.navigateByUrl("/login");
    localStorage.clear();
  }

  goOnHomepage(){
    this.router.navigateByUrl("");
  }

  navigateOnHome(){
    this.router.navigateByUrl("");
  }

  onUserSuportIconClick(){
    this.router.navigateByUrl("/user-support");
  }

  // openPublishModal(){
  //   const dialogRef = this.dialog.open(PublishAdModalComponent,{
  //     // width:'400px'
  //   });
  // }

  // getSuggestions(){
  //   this.service.getSuggestions(this.searchText).subscribe((data:any)=>{
  //     this.suggestions=data;
  //   })
  // }


  // onCardClick(id:any){
  //   this.router.navigate(['/product', id]);
  // }


  // ngOnInit(){
  //   this.getAllProducts();
  // }
 
  // getAllProducts(){
  //   this.service.getAllProducts().subscribe((data: any) => {
  //   this.products=data;
  // });


  
}
