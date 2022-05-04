import { Npc } from './npc';

export interface Combat {
  id: string;
  npcs: Npc[];
  currentTurn: number;
  isActive: boolean;
}
