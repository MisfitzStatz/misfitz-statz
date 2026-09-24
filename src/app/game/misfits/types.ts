export type BalanceChangeType =
  | "changed"
  | "reduced"
  | "increased";

export type MisfitStat =
  | "attack"
  | "hp"
  | "damage"
  | "speed"
  | "reload"
  | "range";

export interface Misfit {
  id: string;
  name: string;
  class: string;
  description: string;

  status?: "released" | "teaser";

  stats: {
    hp: number;
    damage: number;
    speed: number;
    reload: number;
    range: number;
  };

  abilities: {
    attack: string;
    ultimate: string;
    ability: string;
  };

  balanceChanges?: {
    version: string;
    date?: string;

    changes: {
      type: BalanceChangeType;
      stat?: MisfitStat;
      oldValue?: string | number;
      newValue?: string | number;
      description: string;
    }[];
  }[];

  image: string;

  accentColor?: string;
}