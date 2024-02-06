import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ThemeActions from './state/theme/theme.actions';
import * as TitleActions from './state/title/title.actions';
import { ThemeState } from './state/theme/theme.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private store: Store<ThemeState>){
    const theme = "theme1";
    this.store.dispatch(ThemeActions.changeTheme({theme}));

    const title =  "Mfe2";
    this.store.dispatch(TitleActions.changeTitle({title}));
  }
}
