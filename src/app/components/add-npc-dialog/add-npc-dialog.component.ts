import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Npc } from 'src/app/interfaces/npc';
import { CombatService } from 'src/app/services/combat.service';

@Component({
  selector: 'app-add-npc-dialog',
  templateUrl: './add-npc-dialog.component.html',
  styleUrls: ['./add-npc-dialog.component.scss'],
})
export class AddNpcDialogComponent implements OnInit, OnDestroy {
  npcListSubscription: Subscription;
  npcList: Npc[];
  npcCardActionsAvailable: boolean = false;
  constructor(
    private combatService: CombatService,
    public dialogRef: MatDialogRef<AddNpcDialogComponent>
  ) {}

  ngOnInit(): void {
    this.npcListSubscription = this.combatService
      .getNpcs()
      .subscribe((npcs: Npc[]) => {
        this.npcList = npcs;
      });
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this.npcListSubscription.unsubscribe();
  }
}
