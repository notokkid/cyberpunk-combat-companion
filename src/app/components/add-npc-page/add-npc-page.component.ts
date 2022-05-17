import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Npc } from 'src/app/interfaces/npc';
import { CombatService } from 'src/app/services/combat.service';

@Component({
  selector: 'app-add-npc-page',
  templateUrl: './add-npc-page.component.html',
  styleUrls: ['./add-npc-page.component.scss'],
})
export class AddNpcPageComponent implements OnInit, OnDestroy {
  npcListSubscription: Subscription;
  npcList: Npc[];
  npcCardActionsAvailable: boolean = false;

  constructor(private combatService: CombatService) {}

  ngOnInit(): void {
    this.npcListSubscription = this.combatService
      .getNpcs()
      .subscribe((npcs: Npc[]) => {
        this.npcList = npcs;
      });
  }

  addNpcToCombat(npc: Npc) {
    this.combatService.addNpcToCombat(npc);
  }

  ngOnDestroy(): void {
    this.npcListSubscription.unsubscribe();
  }
}
