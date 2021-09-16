import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpellsService } from '../spells.service';
import { loadSpells, loadSpellsFail, loadSpellsSuccess } from './spells.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SpellsEffects {
  constructor(private spellsService: SpellsService, private actions$: Actions) {}

  loadSpells$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSpells),
      switchMap(() =>
        this.spellsService.loadSpells().pipe(
          map((spells) => loadSpellsSuccess({ spells })),
          catchError((error) => of(loadSpellsFail({ error }))),
        ),
      ),
    );
  });
}
