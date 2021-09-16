import { Druid } from '@ngrx-druids/shared/data-acces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DruidsState, DRUIDS_FEATURE_KEY } from './druids.reducer';

export const selectDruidsState = createFeatureSelector<DruidsState>(DRUIDS_FEATURE_KEY);
export const selectAllDruids = createSelector(selectDruidsState, (state) => state.druids);

export const selectDruidEntities = createSelector(selectAllDruids, (state) => {
  return state.reduce((acc, druid) => {
    acc[druid.id] = druid;
    return acc;
  }, {} as Record<string, Druid>);
});
