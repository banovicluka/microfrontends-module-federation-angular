import { createAction, createReducer, on } from "@ngrx/store"
import { TitleState } from "./title.state";
import * as TitleActions from "./title.actions";

export const initialTitleState : TitleState = {
    title: "Shell"
}

export const titleReducer = createReducer(
    initialTitleState,
    on(TitleActions.changeTitle,(state,{title}) => ({
        ...state,
        title: title,
    }))
);