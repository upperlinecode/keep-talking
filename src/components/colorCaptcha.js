import React from 'react'
import './colorCaptcha.css'

const ColorCaptcha = () => {
  const component = new React.Component()
  const answerColor = "rgb(255, 192, 203)"

  component.state = {
    red: 0,
    green: 0,
    blue: 0
  }

  component.render = () => {
    // Access the state variables
    const red = component.state.red
    const green = component.state.green
    const blue = component.state.blue
    let yourColor = `rgb(${red}, ${green}, ${blue})`

    const winning = () => {
      console.log("Your color: " + yourColor)
      console.log("Answer color: " + answerColor)
      if (yourColor === answerColor) {
        return true
      }
      return false
    }

    const recolor = (colorName, e) => {
      console.log(e.target.value)
      const prevState  = {...component.state}
      prevState[colorName] = parseInt(e.target.value)
      component.setState(prevState)
    }

    return (
      <div className={"ColorCaptcha " + (winning() ? "winning" : "losing")}>
        <h1 className="directions">Match the background color perfectly</h1>
        <div className="hint">
          <h3>Target Total: 650</h3>
          <h3>Your Total: {red + blue + green}</h3>
        </div>
        <div className="colorBlock">
          <div className="colorSliders">
            <input type="range" min="1" max="255" defaultValue={red}
              onChange={(e)=>{recolor("red", e)}}
            />
            <input type="range" min="1" max="255" defaultValue={green}
              onChange={(e)=>{recolor("green", e)}}
            />
            <input type="range" min="1" max="255" defaultValue={blue}
              onChange={(e)=>{recolor("blue", e)}}
            />
          </div>
          <div className="colorDisplay" style={{"background-color": yourColor}}></div>
        </div>
      </div>
    )
  }
  return component
}

export default ColorCaptcha
