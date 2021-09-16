import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DruidListComponent } from './druid-list/druid-list.component';
import { DruidsDataAccessModule } from '@ngrx-druids/druids/data-access';
import { SpellsDataAccessModule } from '@ngrx-druids/spells/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DruidListComponent }]),
    DruidsDataAccessModule,
    SpellsDataAccessModule,
  ],
  declarations: [DruidListComponent],
})
export class DruidsFeaturesListModule {}
