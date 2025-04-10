import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // 状態（state）を定義

  const handleClick = () => {
    setCount(count + 1); // ボタンがクリックされたら count を1増やす
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>現在のカウント: {count}</p>
        <button onClick={handleClick}>
          カウントを増やす
        </button>
      </header>
    </div>
  );
}

export default App;
