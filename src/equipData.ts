export type EquipItem = {
  id: string;
  name: string;
}

export const WEAPON_DATA: Record<string,EquipItem[]>={
    none: [
      {id: 'none', name: '--'},
    ],
    F:[
      {id: 'Fnone', name: '--'},
      {id: 'F1', name: 'こんぼう'}
    ],
  };