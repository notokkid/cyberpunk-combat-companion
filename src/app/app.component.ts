import { Component, OnDestroy, OnInit } from '@angular/core';
import { CombatService } from './services/combat.service';
import { Combat } from './interfaces/combat';
import { MatDialog } from '@angular/material/dialog';
import { AddNpcDialogComponent } from './components/add-npc-dialog/add-npc-dialog.component';
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

  constructor(private combatService: CombatService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.currentCombatSubscription =
      this.combatService.currentCombatSubject.subscribe((combat: Combat) => {
        if (combat) {
          console.log(combat);
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

  openAddNpcDialog() {
    const dialogRef = this.dialog.open(AddNpcDialogComponent, {
      width: '95%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.combatService.addNpcToCombat(result);
      }
    });
  }

  ngOnDestroy(): void {}
}
