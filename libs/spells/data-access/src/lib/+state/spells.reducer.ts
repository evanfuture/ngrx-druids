import { createReducer, on } from '@ngrx/store';
import { loadSpellsSuccess } from './spells.actions';
import { Spell } from '@ngrx-druids/shared/data-acces';

export const SPELLS_FEATURE_KEY = 'spells';

export interface SpellsState {
  spells: Spell[];
}
const initialState: SpellsState = {
  spells: [],
};

export const spellsReducer = createReducer(
  initialState,
  on(loadSpellsSuccess, (state, { spells }) => ({ ...state, spells })),
);
