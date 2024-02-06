import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TitleState } from "./title.state";


export const selectTitleState = createFeatureSelector<TitleState>('title');

export const selectTitle = createSelector(
  selectTitleState,
  (state: TitleState) => state.title
);