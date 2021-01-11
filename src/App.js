import React, { useState } from 'react';

import './App.css';

import Images from './Images';

import Data from './data.json';

function App() {
  const [item, setItem] = useState(
    Data[Math.floor(Math.random() * Data.length)]
  );

  const [correct, setCorrect] = useState(0);

  const [input, setInput] = useState('');

  const [showName, setShowName] = useState(false);

  const nextItem = () => {
    setShowName(false);
    setItem(Data[Math.floor(Math.random() * Data.length)]);
  };

  function handleChange(e) {
    setInput(e.target.value);
  }

  const checkPLU = (e) => {
    e.preventDefault();
    setInput('');
    if (input === item.plu) {
      setCorrect(correct + 1);
      console.log(correct);
      if (correct >= 3) {
        nextItem();
      }
    } else {
      setCorrect(0);
      console.log(correct);
      setShowName(true);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Publix PLU Practice</h1>
        <form onSubmit={checkPLU}>
          <input type='text' onChange={handleChange} value={input} />
        </form>

        <p>{showName ? item.name + ' - ' + item.plu : ''}</p>
        <Images imageName={item.plu} />
      </header>
    </div>
  );
}

export default App;
