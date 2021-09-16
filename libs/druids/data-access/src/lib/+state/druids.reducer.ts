import { createReducer, on } from '@ngrx/store';
import { loadDruidsSuccess } from './druids.actions';
import { Druid } from '@ngrx-druids/shared/data-acces';

export const DRUIDS_FEATURE_KEY = 'druids';

export interface DruidsState {
  druids: Druid[];
}
const initialState: DruidsState = {
  druids: [],
};

export const druidsReducer = createReducer(
  initialState,
  on(loadDruidsSuccess, (state, { druids }) => ({ ...state, druids })),
);
