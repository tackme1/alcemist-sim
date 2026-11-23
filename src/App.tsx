import { useState } from 'react';

export default function App() {
  // ①【データ置き場】選ばれている項目を覚えておく箱
  const [selectedrank, setSelectedrank] = useState<string>('floor1');

  // ②【計算場所】選ばれた項目によって数値や倍率を変える例
  let bonusRate = 0;
  if (selectedrank === 'floor1') bonusRate = 10;
  if (selectedrank === 'floor2') bonusRate = 20;
  if (selectedrank === 'fever')  bonusRate = 50;

  // ③【画面表示】<select> と <option> で選択肢を作る
  return (
    <div>
      <label>ランク：</label>

      <select
        value={selectedrank}
        onChange={(e) => setSelectedrank(e.target.value)}
      >
        <option value="floor1">F</option>
        <option value="floor2">E</option>
        <option value="floor3">D</option>
        <option value="fever">C</option>
        <option value="rank">B</option>
      </select>

      <p>現在の補正倍率：+{bonusRate}%</p>
    </div>
  );
}
