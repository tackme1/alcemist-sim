import { useState } from 'react'
import { WEAPON_DATA } from './equipData';

export default function App() {
  // ①【データ置き場】選ばれている項目を覚えておく箱
  const [rank, setRank] = useState<string>('none');
  const [weapon, setWeapon] = useState<string>('Fnone');
  // ②【計算場所】選ばれた項目によって数値や倍率を変える例
  const currentList = WEAPON_DATA[rank];
  const selectedweapon = currentList.find((item)=>item.id === weapon) || currentList[0];
  const handleRankChange = (newRank: string) => {
    setRank(newRank);
    setWeapon(WEAPON_DATA[newRank][0].id);
  };
  // ③【画面表示】<select> と <option> で選択肢を作る
  return (
    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
      <p>武器</p>
      <div>
        <label>ランク：</label>
        <select value={rank} onChange={(e) => handleRankChange(e.target.value)}>
          <option value="none">--</option>
          <option value="F">F</option>
        </select>
      </div>

      <div>
        <label>装備名：</label>
        <select value={weapon} onChange={(e) => setWeapon(e.target.value)}>
          {currentList.map((item)=>(
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <p>選択中の装備：{selectedweapon.name}</p>
    </div>
  );
};
