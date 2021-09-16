import { createAction, props } from '@ngrx/store';
import { Spell } from '@ngrx-druids/shared/data-acces';

export const loadSpells = createAction('[Spells] Load Spells');
export const loadSpellsSuccess = createAction('[Spells] Load Spells Success', props<{ spells: Spell[] }>());
export const loadSpellsFail = createAction('[Spells] Load Spells Fail', props<{ error: any }>());
