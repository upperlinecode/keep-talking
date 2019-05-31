import React from 'react'
import './numberDials.css'

const NumberDials = () => {
  const component = new React.Component()

  component.state = {
    numberA: 0,
    numberB: 0,
    numberC: 0,
    numberD: 0,
  }

  const winning = (a, b, c, d) => {
    // Function to chech and see if YOUR code (a,b,c,d)
    // matches the secret code (9,6,3,0)
    if (a === 9 && b === 6 && c === 3 && d === 0) {
      return true
    }
    return false
  }

  component.render = () => {
    // To increase readability we are making variables with shorter names
    // This also saves us the trouble of unpacking state if we want to modify later
    const a = component.state.numberA
    const b = component.state.numberB
    const c = component.state.numberC
    const d = component.state.numberD



    return (
      <div className={"NumberDials" + (winning(a, b, c, d) ? " winning" : " losing")}>
        <h1 className="directions">Guess the 4-digit code</h1>
        <div className="hint">
          <h3>Target Sum: 18</h3>
          <h3>Your Sum: ##</h3>
        </div>
        <div className="numberPlates">
          <div className="numberPlate">
            <button onClick={()=>component.setState({numberA: a + 1})}>↑</button>
            <div className="digit">##A</div>
            <button>↓</button>
          </div>
        </div>
      </div>
    )
  }
  return component
}

export default NumberDials
