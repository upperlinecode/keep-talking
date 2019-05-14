import React from 'react';
import './App.css';
import NumberDials from './components/numberDials'
import SlidingPuzzle from './components/slidingPuzzle'

const App = () => {
  return (
    <div className="App">
      <NumberDials/>
      <SlidingPuzzle/>
    </div>
  );
}

export default App;
