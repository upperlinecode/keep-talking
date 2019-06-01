import React from 'react';
import './App.css';
import NumberDials from './components/numberDials'
// import SlidingPuzzle from './components/slidingPuzzle'
import Navbar from './components/navbar'
import Checkboxes from './components/checkboxes'
import ColorCaptcha from './components/colorCaptcha'

const App = () => {
  const component = new React.Component();
  
  component.render = () => {
    return (
      <div className="App">
        <Navbar/>
        <NumberDials/>
        <Checkboxes/>
        <ColorCaptcha/>
      </div>
    );
  }
  
  return component
}

export default App;
