import React from 'react'
import './numberDials.css'

const winning = (a, b, c, d) => {
  return (
    a === 3 &&
    b === 2 &&
    c === 1 &&
    d === 0
  )
}

const NumberDials = () => {
  const component = new React.Component()

  component.state = {
    numberA: 0,
    numberB: 0,
    numberC: 0,
    numberD: 0,
  }

  component.render = () => {
    // to increase readability we are making variables with shorter names
    const a = component.state.numberA
    const b = component.state.numberB
    const c = component.state.numberC
    const d = component.state.numberD
    return (
      <div className={"NumberDials" + (winning(a, b, c, d) ? " winning" : " losing")}>
        <div>
          {component.state.numberA}
          <button onClick={()=>component.setState({numberA: a<9?a+1:a})}/>
          <button onClick={()=>component.setState({numberA: a>0?a-1:a})}/>
        </div>
        <div>
          {component.state.numberB}
          <button onClick={()=>component.setState({numberB: b<9?b+1:b})}/>
          <button onClick={()=>component.setState({numberB: b>0?b-1:b})}/>
        </div>
        <div>
          {component.state.numberC}
          <button onClick={()=>component.setState({numberC: c<9?c+1:c})}/>
          <button onClick={()=>component.setState({numberC: c>0?c-1:c})}/>
        </div>
        <div>
          {component.state.numberD}
          <button onClick={()=>component.setState({numberD: d<9?d+1:d})}/>
          <button onClick={()=>component.setState({numberD: d>0?d-1:d})}/>
        </div>
      </div>
    )
  }
  return component
}

export default NumberDials
