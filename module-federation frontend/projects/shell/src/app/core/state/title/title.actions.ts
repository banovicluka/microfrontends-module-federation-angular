import { createAction, props } from "@ngrx/store";


export const changeTitle = createAction('[Title] Change Title', props<{ title: string}>());