import React from 'react'
import './slidingPuzzle.css'

const swap = (slots, a, b) => {
  [slots[a], slots[b]] = [slots[b], slots[a]]
}

const trySwaps = (n, slots) => {
  if (slots[n+3] === " ") {
    swap(slots, n, n+3)
  } else if (slots[n-3] === " ") {
    swap(slots, n, n-3)
  } else if (slots[n+1] === " ") {
    swap(slots, n, n+1)
  } else if (slots[n-1] === " ") {
    swap(slots, n, n-1)
  }
  return slots
}

const htmlifySlots = (slots, comp) => {
  return slots.map((slot, i) => {
    return (
      <div key={i} className="tile" onClick={()=>comp.setState({slots:trySwaps(i, slots)})}>
        {slot}
      </div>
    )
  })
}

const SlidingPuzzle = () => {
  const component = new React.Component()
  component.state = {
    slots:[
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      " ",
    ]
  }
  component.render = () => {
    return (
      <div className="slidingPuzzle">
        {htmlifySlots(component.state.slots, component)}
      </div>
    )
  }
  return component
}

export default SlidingPuzzle
