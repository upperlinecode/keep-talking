import React from 'react'
import './checkboxes.css'

const Checkboxes = () => {
  const component = new React.Component()
  // This version starts with four checkmarks.
  // Make them work before adding more.
  const answerKey = [
    true, false, true, true
  ]

  component.state = {
    checks: [true, false, true, true]
  }

  const handleClickForBox = (i) => {
    // This first line exists just for debugging purposes.
    console.log("You clicked on box #" + i)
    // Start by accessing the current array of checks.
    const arrayOfChecks = component.state.checks
    // Do whatever logic you'll need to do to update that box.
    // YOUR
    // CODE
    // HERE
    // (Remember to use the component.setState(newState) method afterwards!)
  }

  const countTrue = (arrayOfChecks) => {
    // You'll want to write a method that counts the number of "true" in your
    // state's "checks" array, so that you can tell the user what their
    // checkmarks are. Right now there's a placeholder return value: "##".
    return "##"
  }

  const winning = () => {
    // You'll need to write a function that returns false, unless every item
    // in your array matches the answer key. Right now there's a placeholder
    // return value of false.
    return false
  }

  component.render = () => {
    // To increase readability we are unpacking the checks array here
    const arrayOfChecks = component.state.checks
    return (
      <div className={"Checkboxes " + (winning(arrayOfChecks) ? "winning" : "losing")}>
        <h1 className="directions">Check only the correct boxes</h1>
        <div className="hint">
          <h3>Target Sum: 7</h3>
          <h3>Your Sum: {countTrue(arrayOfChecks)}</h3>
        </div>
        <div className="checkGrid">
          <div className={"checkbox " + arrayOfChecks[0]} onClick={()=>handleClickForBox(0)}>{arrayOfChecks[0]}</div>
          <div className={"checkbox " + arrayOfChecks[1]} onClick={()=>handleClickForBox(1)}/>
          <div className={"checkbox " + arrayOfChecks[2]} onClick={()=>handleClickForBox(2)}/>
          <div className={"checkbox " + arrayOfChecks[3]} onClick={()=>handleClickForBox(3)}/>
        </div>
      </div>
    )
  }
  return component
}

export default Checkboxes
