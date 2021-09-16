import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { spellsReducer, SPELLS_FEATURE_KEY } from './+state/spells.reducer';
import { SpellsEffects } from './+state/spells.effects';
import { EffectsModule } from '@ngrx/effects';
import { SpellsService } from './spells.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(SPELLS_FEATURE_KEY, spellsReducer),
    EffectsModule.forFeature([SpellsEffects]),
  ],
  providers: [SpellsService],
})
export class SpellsDataAccessModule {}
