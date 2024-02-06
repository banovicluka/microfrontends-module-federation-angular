import { createReducer, on, Action } from "@ngrx/store";
import { ThemeState } from "./theme.state";
import * as ThemeActions from './theme.actions';


export const initialThemeState: ThemeState = {
    theme: "theme1"
}

export const themeReducer = createReducer(
    initialThemeState,
    on(ThemeActions.changeTheme,(state,{theme}) => ({
        ...state,
        theme:theme,
    }))
);

// export function themeReducer(state: ThemeState,action: Action){
//     return _themeReducer(state,action);
// }