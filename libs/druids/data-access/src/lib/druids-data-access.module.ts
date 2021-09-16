import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DruidsEffects } from './+state/druids.effects';
import { druidsReducer, DRUIDS_FEATURE_KEY } from './+state/druids.reducer';
import { DruidsService } from './druids.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(DRUIDS_FEATURE_KEY, druidsReducer),
    EffectsModule.forFeature([DruidsEffects]),
  ],
  providers: [DruidsService],
})
export class DruidsDataAccessModule {}
