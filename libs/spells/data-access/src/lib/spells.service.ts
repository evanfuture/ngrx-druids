import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Spell } from '@ngrx-druids/shared/data-acces';

@Injectable({ providedIn: 'root' })
export class SpellsService {
  SPELLS: Spell[] = [
    { id: '23456', name: 'Wild Shape', description: 'Transform into a different animal', creatorId: '1235' },
    { id: '23457', name: 'Fireball', description: 'Shoot a fireball', creatorId: '1234' },
  ];
  constructor(private httpClient: HttpClient) {}

  loadSpells(): Observable<Spell[]> {
    return of(this.SPELLS);
  }
}
