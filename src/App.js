import React from 'react';
import Contact from './components/Contact';

function App() {
  const mail = "manimigue@moegi.waseda.jp"
  const contactTypes = [
    "イベントの内容について",
    "イベント参加方法について",
    "その他"
  ]

  return (
    <div className="main">
      <Contact />
    </div>
  );
}

export default App;
