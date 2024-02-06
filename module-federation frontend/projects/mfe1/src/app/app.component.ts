import { Component } from '@angular/core';
import * as ThemeActions from './state/theme/theme.actions';
import * as TitleActions from './state/title/title.actions';
import { Store } from '@ngrx/store';
import { ThemeState } from './state/theme/theme.state';
import { TitleState } from './state/title/title.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfe1';

  constructor(private store: Store<ThemeState>,private titleStore: Store<TitleState>){
    const theme = "theme1";
    this.store.dispatch(ThemeActions.changeTheme({theme}));

    const title = "Mfe1";
    this.titleStore.dispatch(TitleActions.changeTitle({title}));
  }
}
