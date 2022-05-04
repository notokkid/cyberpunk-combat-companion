import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AttackingData } from 'src/app/interfaces/attacking-data';
import { DamageRollData } from 'src/app/interfaces/damage-roll-data';
import { Npc } from 'src/app/interfaces/npc';
import { Weapon } from 'src/app/interfaces/weapon';
import { CombatService } from 'src/app/services/combat.service';

@Component({
  selector: 'app-npc-attack-dialog',
  templateUrl: './npc-attack-dialog.component.html',
  styleUrls: ['./npc-attack-dialog.component.scss'],
})
export class NpcAttackDialogComponent implements OnInit {
  combatData: DamageRollData;
  constructor(
    public dialogRef: MatDialogRef<NpcAttackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public attackingData: AttackingData,
    private combatService: CombatService
  ) {}

  ngOnInit(): void {
    this.combatData = this.combatService.attackWithNpc(this.attackingData);
  }
}
