import React from 'react'
import './colorCaptcha.css'

const ColorCaptcha = () => {
  const component = new React.Component()
  // This is the RGB value for pink - the background color of the component.
  const answerColor = "rgb(255, 192, 203)"

  // component.state hasn't been fully defined yet.
  component.state = {}

  component.render = () => {
    // Access the state variables
    const red = component.state.red
    const green = component.state.green
    const blue = component.state.blue
    let yourColor = `rgb(${red}, ${green}, ${blue})`

    const winning = () => {
      // Write code here that returns true if your color matches the answer
      // color, and returns false if it doesn't. There's a placeholder return
      // already here.
      return false
    }

    const recolor = (colorName, e) => {
      // The variable e is passed in by the event, and represents the event itself.
      // The event's .target is the range (aka the slider) input.
      // The target's .value is the current number the slider is at.
      console.log(e.target.value)
      console.log("changing color for: " + colorName)
      // You'll want to update the state so that the color
    }

    return (
      <div className={"ColorCaptcha " + (winning() ? "winning" : "losing")}>
        <h1 className="directions">Match the background color perfectly</h1>
        <div className="hint">
          <h3>Target Total: 650</h3>
          <h3>Your Total: {}</h3>
        </div>
        <div className="colorBlock">
          <div className="colorSliders">
            <input type="range" min="1" max="255" defaultValue={red}
              onChange={(e)=>{recolor("red", e)}}
            />
          </div>
          <div className="colorDisplay" style={{"backgroundColor": "rgb(200, 220, 220)"}}></div>
        </div>
      </div>
    )
  }
  return component
}

export default ColorCaptcha
