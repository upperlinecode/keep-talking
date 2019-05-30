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
    return (
      a === 9 &&
      b === 6 &&
      c === 3 &&
      d === 0
    )
  }

  component.render = () => {
    // To increase readability we are making variables with shorter names
    // This also saves us the trouble of unpacking state if we want to modify it.
    const a = component.state.numberA
    const b = component.state.numberB
    const c = component.state.numberC
    const d = component.state.numberD
    return (
      <div className={"NumberDials" + (winning(a, b, c, d) ? " winning" : " losing")}>
        <h1 className="directions">Guess the 4-digit code</h1>
        <div className="hint">
          <h3>Target Sum: 18</h3>
          <h3>Your Sum: {a + b + c + d}</h3>
        </div>
        <div className="numberPlates">
          <div className="numberPlate">
            <button onClick={()=>component.setState({numberA: (a + 1) % 10})}>↑</button>
            <div className="digit">{component.state.numberA}</div>
            <button onClick={()=>component.setState({numberA: a==0? 9 : (a - 1) })}>↓</button>
          </div>
          <div className="numberPlate">
            <button onClick={()=>component.setState({numberB: (b + 1) % 10})}>↑</button>
            <div className="digit">{component.state.numberB}</div>
            <button onClick={()=>component.setState({numberB: b==0? 9 : (b - 1)})}>↓</button>
          </div>
          <div className="numberPlate">
            <button onClick={()=>component.setState({numberC: (c + 1) % 10})}>↑</button>
            <div className="digit">{component.state.numberC}</div>
            <button onClick={()=>component.setState({numberC: c==0? 9 : (c - 1)})}>↓</button>
          </div>
          <div className="numberPlate">
            <button onClick={()=>component.setState({numberD: (d + 1) % 10})}>↑</button>
            <div className="digit">{component.state.numberD}</div>
            <button onClick={()=>component.setState({numberD: d==0? 9 : (d - 1)})}>↓</button>
          </div>
        </div>
      </div>
    )
  }
  return component
}

export default NumberDials
