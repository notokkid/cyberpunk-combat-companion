import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Npc } from '../interfaces/npc';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CombatRepositoryService {
  constructor(private http: HttpClient) {}

  fetchNpcs(): Observable<Npc[]> {
    return this.http
      .get(
        'https://notokkid.github.io/cyberpunk-companion-presets/npc-presets.json'
      )
      .pipe(map((npcs) => npcs as Npc[]));
  }
}
