import React from 'react'
import './checkboxes.css'

const Checkboxes = () => {
  const component = new React.Component()
  component.answerKey = [
    true, false, true, true,
    false, false, false, true,
    false, false, true, false,
    true, true, false, false
  ]

  component.state = {
    checks: [true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  }

  component.handleClickForBox = (i) => {
    // Start by accessing the current array of checks.
    const arrayOfChecks = component.state.checks
    if (arrayOfChecks[i] === true) {
      arrayOfChecks[i] = false
    } else {
      arrayOfChecks[i] = true
    }
    component.setState({checks: arrayOfChecks})
  }

  component.countTrue = (arrayOfChecks) => {
    let total = 0
    arrayOfChecks.forEach(entry => {
      if (entry === true) {
        total += 1
      }
    })
    return total
  }

  component.winning = () => {
    for (let i = 0; i < 16; i++) {
      if (component.state.checks[i] !== component.answerKey[i]) {
        return false
      }
    }
    return true
  }

  component.render = () => {
    // To increase readability we are unpacking the checks array here
    const arrayOfChecks = component.state.checks
    return (
      <div className={"Checkboxes " + (component.winning(arrayOfChecks) ? "winning" : "losing")}>
        <h1 className="directions">Check only the correct boxes</h1>
        <div className="hint">
          <h3>Target Sum: 7</h3>
          <h3>Your Sum: {component.countTrue(arrayOfChecks)}</h3>
        </div>
        <div className="checkGrid">
          <div className={"checkbox " + arrayOfChecks[0]} onClick={()=>component.handleClickForBox(0)}/>
          <div className={"checkbox " + arrayOfChecks[1]} onClick={()=>component.handleClickForBox(1)}/>
          <div className={"checkbox " + arrayOfChecks[2]} onClick={()=>component.handleClickForBox(2)}/>
          <div className={"checkbox " + arrayOfChecks[3]} onClick={()=>component.handleClickForBox(3)}/>
          <div className={"checkbox " + arrayOfChecks[4]} onClick={()=>component.handleClickForBox(4)}/>
          <div className={"checkbox " + arrayOfChecks[5]} onClick={()=>component.handleClickForBox(5)}/>
          <div className={"checkbox " + arrayOfChecks[6]} onClick={()=>component.handleClickForBox(6)}/>
          <div className={"checkbox " + arrayOfChecks[7]} onClick={()=>component.handleClickForBox(7)}/>
          <div className={"checkbox " + arrayOfChecks[8]} onClick={()=>component.handleClickForBox(8)}/>
          <div className={"checkbox " + arrayOfChecks[9]} onClick={()=>component.handleClickForBox(9)}/>
          <div className={"checkbox " + arrayOfChecks[10]} onClick={()=>component.handleClickForBox(10)}/>
          <div className={"checkbox " + arrayOfChecks[11]} onClick={()=>component.handleClickForBox(11)}/>
          <div className={"checkbox " + arrayOfChecks[12]} onClick={()=>component.handleClickForBox(12)}/>
          <div className={"checkbox " + arrayOfChecks[13]} onClick={()=>component.handleClickForBox(13)}/>
          <div className={"checkbox " + arrayOfChecks[14]} onClick={()=>component.handleClickForBox(14)}/>
          <div className={"checkbox " + arrayOfChecks[15]} onClick={()=>component.handleClickForBox(15)}/>
        </div>
      </div>
    )
  }
  return component
}

export default Checkboxes;
