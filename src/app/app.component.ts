import { Component, OnDestroy, OnInit } from '@angular/core';
import { CombatService } from './services/combat.service';
import { Combat } from './interfaces/combat';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cyberpunk-combat-companion';
  currentCombat: Combat;
  currentCombatSubscription: Subscription;
  npcCardActionsAvailable: boolean = true;
  npcListVisible: boolean = false;

  constructor(private combatService: CombatService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.currentCombatSubscription =
      this.combatService.currentCombatSubject.subscribe((combat: Combat) => {
        if (combat) {
          this.currentCombat = combat;
        }
      });
  }

  startCombat() {
    this.combatService.startCombat();
  }

  endCombat() {
    this.combatService.endCombat();
  }

  endCurrentCombatTurn() {
    this.combatService.endCombatTurn();
  }

  toggleNpcList() {
    this.npcListVisible = !this.npcListVisible;
  }

  ngOnDestroy(): void {}
}
