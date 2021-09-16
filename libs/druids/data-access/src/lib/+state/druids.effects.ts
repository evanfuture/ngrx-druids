import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DruidsService } from '../druids.service';
import { loadDruids, loadDruidsFail, loadDruidsSuccess } from './druids.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DruidsEffects {
  constructor(private druidsService: DruidsService, private actions$: Actions) {}

  loadDruids$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDruids),
      switchMap(() =>
        this.druidsService.loadDruids().pipe(
          map((druids) => loadDruidsSuccess({ druids })),
          catchError((error) => of(loadDruidsFail({ error }))),
        ),
      ),
    );
  });
}
