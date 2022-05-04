import { Injectable } from '@angular/core';
import { Combat } from '../interfaces/combat';
import { UUID } from 'angular2-uuid';
import { Npc } from '../interfaces/npc';
import { Subject } from 'rxjs';
import { CombatRepositoryService } from './combat-repository.service';
import { Weapon } from '../interfaces/weapon';
import { AttackingData } from '../interfaces/attacking-data';
import { DamageRollData } from '../interfaces/damage-roll-data';

@Injectable({
  providedIn: 'root',
})
export class CombatService {
  constructor(private combatRepository: CombatRepositoryService) {}

  _currentCombat: Combat;
  currentCombatSubject: Subject<Combat> = new Subject<Combat>();
  npcListSubject$: Subject<Npc[]>;

  public startCombat() {
    const newCombat = {
      id: UUID.UUID(),
      npcs: [],
      currentTurn: 1,
      isActive: true,
    };
    this._currentCombat = newCombat;
    this.currentCombatSubject.next(newCombat);
  }

  public endCombat() {
    this._currentCombat.isActive = false;
    this.currentCombatSubject.next(this._currentCombat);
  }

  addNpcToCombat(npc: Npc) {
    const newNPC = { ...npc, id: UUID.UUID() };
    const newNpcList = [...this._currentCombat.npcs, newNPC];
    this._currentCombat.npcs = newNpcList;
    this.currentCombatSubject.next(this._currentCombat);
  }

  attackWithNpc(attackingData: AttackingData) {
    const { damageDice, combatPower } = attackingData.attackingWeapon;
    // Roll to hit
    const hitRoll = this.rollDice(10, combatPower);
    // Roll Damage
    const damageRollArray: number[] = [];
    let damageRollSum: number = 0;
    for (let index = 0; index < damageDice; index++) {
      const diceRoll = this.rollDice(6, 0);
      damageRollArray.push(diceRoll);
      damageRollSum += diceRoll;
    }

    // Update attacks this turn

    // Update has attacked this turn

    // Emit new state
    const damageData: DamageRollData = {
      hitRoll,
      damageRollArray,
      damageRollSum,
    };

    return damageData;
  }

  updateNpcHealth(adjustment: number, npcId: string) {
    this._currentCombat.npcs.forEach((npc: Npc) => {
      if (npc.id === npcId) {
        npc.currentHealth += adjustment;
      }
    });
    this.currentCombatSubject.next(this._currentCombat);
  }

  endCombatTurn() {}

  private rollDice(sides: number, combatBonus: number) {
    return Math.floor(Math.random() * sides + 1) + combatBonus;
  }

  getNpcs() {
    return this.combatRepository.fetchNpcs();
  }
}
