import { createAction, props } from '@ngrx/store';
import { Druid } from '@ngrx-druids/shared/data-acces';

export const loadDruids = createAction('[Druids] Load Druids');
export const loadDruidsSuccess = createAction('[Druids] Load Druids Success', props<{ druids: Druid[] }>());
export const loadDruidsFail = createAction('[Druids] Load Druids Fail', props<{ error: any }>());
