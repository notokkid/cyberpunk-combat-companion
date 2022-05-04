import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttackingData } from 'src/app/interfaces/attacking-data';
import { Npc } from 'src/app/interfaces/npc';
import { Weapon } from 'src/app/interfaces/weapon';
import { CombatService } from 'src/app/services/combat.service';
import { NpcAttackDialogComponent } from '../npc-attack-dialog/npc-attack-dialog.component';

@Component({
  selector: 'app-npc-card',
  templateUrl: './npc-card.component.html',
  styleUrls: ['./npc-card.component.scss'],
})
export class NpcCardComponent implements OnInit {
  @Input() npc: Npc;
  @Input() actionsAvailable: boolean;

  constructor(private combatService: CombatService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  adjustNpcHealth(healthAdjustment: number) {
    this.combatService.updateNpcHealth(healthAdjustment, this.npc.id);
  }

  attackWithWeapon(attackingWeapon: Weapon) {
    const attackingData: AttackingData = {
      attackingNpcId: this.npc.id,
      attackingWeapon,
    };
    this.dialog.open(NpcAttackDialogComponent, {
      width: '300px',
      data: attackingData,
    });
  }
}
