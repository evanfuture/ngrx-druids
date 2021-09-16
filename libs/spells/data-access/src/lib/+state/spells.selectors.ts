import { Spell } from '@ngrx-druids/shared/data-acces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpellsState, SPELLS_FEATURE_KEY } from './spells.reducer';

export const selectSpellsState = createFeatureSelector<SpellsState>(SPELLS_FEATURE_KEY);
export const selectAllSpells = createSelector(selectSpellsState, (state) => state.spells);
export const selectSpellEntities = createSelector(selectAllSpells, (state) => {
  return state.reduce((acc, spell) => {
    acc[spell.id] = spell;
    return acc;
  }, {} as Record<string, Spell>);
});
