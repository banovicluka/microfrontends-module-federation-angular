import { createReducer, on, Action } from "@ngrx/store"
import { LanguageState } from "./language.state";
import * as LanguageActions from './language.actions';

export const initialLanguageState: LanguageState = {
    language: "sr"
}


export const languageReducer = createReducer(
    initialLanguageState,
    on(LanguageActions.changeLanguage, (state,{language}) => ({
        ...state,
        language:language,
    }))
);
