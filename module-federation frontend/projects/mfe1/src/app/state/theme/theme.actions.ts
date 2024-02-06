import { createAction, props } from "@ngrx/store";


export const changeTheme = createAction('[Theme] Change Theme', props<{ theme: string}>());