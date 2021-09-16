import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDruids, selectAllDruids, selectDruidEntities } from '@ngrx-druids/druids/data-access';
import { loadSpells, selectSpellEntities } from '@ngrx-druids/spells/data-access';
import { Druid } from '@ngrx-druids/shared/data-acces';

@Component({
  selector: 'ngrx-druids-druid-list',
  templateUrl: './druid-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DruidListComponent implements OnInit {
  allDruids$ = this.store.select(selectAllDruids);
  spellEntities$ = this.store.select(selectSpellEntities);
  druidEntities$ = this.store.select(selectDruidEntities);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadSpells());
    this.store.dispatch(loadDruids());
  }

  druidTrackBy(index: number, druid: Druid): string {
    return druid.id;
  }
  spellTrackBy(index: number, spellId: string): string {
    return spellId;
  }
}
