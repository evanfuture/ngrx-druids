import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Druid } from '@ngrx-druids/shared/data-acces';

@Injectable({ providedIn: 'root' })
export class DruidsService {
  DRUIDS: Druid[] = [
    { id: '1234', name: 'Evan', spells: ['23456'] },
    { id: '1235', name: 'Chau', spells: ['23457'] },
  ];
  constructor(private httpClient: HttpClient) {}

  loadDruids(): Observable<Druid[]> {
    return of(this.DRUIDS);
  }
}
