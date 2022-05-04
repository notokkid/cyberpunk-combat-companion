import { Weapon } from './weapon';

export interface Npc {
  id: string;
  name: string;
  weapons: Weapon[];
  intitiative: number;
  maxHealth: number;
  currentHealth: number;
  headStoppingPower: number;
  bodyStoppingPower: number;
  isDead: boolean;
}
