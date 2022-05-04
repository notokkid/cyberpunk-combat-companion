export interface Weapon {
  id?: string;
  name: string;
  rateOfFire: number; // Times it can attack per turn
  damageDice: number; // How much times six
  combatPower: number;
  timesAttacked: number;
}
