# CodeBreakers React Lab

![Keypad](https://media.giphy.com/media/3o6MbdTboTFWOUsLkc/giphy.gif)

## The Goal

Ultimately we're going to create a puzzle app that represents a security system. In order to get past the system, a user will need to enter the correct numerical code, check the correct pattern of checkboxes in a grid, and finally match a color EXACTLY to the background.

These components are half-built, but not fully-built. You're going to finish building as many of them as you can.

## The Setup

1. Clone this repository using `git clone`
2. `cd` into the `security-panels-react-lab` folder
3. `npm install`
4. `npm start`
5. If the app compiles with no errors:
    1. click on the `localhost` link, or
    2. tap the `CS50 IDE` link in the header and choose `Web Server`
6. If the app compiles with errors, to view the live app:
    1. tap the `CS50 IDE` link in the header
    2. choose `Web Server`
7. If the app fails to compile, re-clone the repository

## The Lab

The styling is mostly built out, so you probably won't need to work much on the CSS, but the components are still pretty rough. Each one has a list of features you'll want to build out.

### Part One: The 4-digit NumberDials Lock

###### Core features:
1. Make the component's state's `numberA` property display where it currently says `##A`.
2. The increase button works, but the decrease button doesn't. Build the decrease button's `onClick` function.
3. Right now there's only a `numberPlate` div for the `numberA` value. Build out sibling elements that are also number plates for the other three numbers.
4. Have "Your Sum" `<h3>` element display the sum of your current four digits.

###### Stretch features:
* Fix the number plates so that they can only ever show a single, non-negative digit, 0-9.
* Find a way to randomize the code when a user first loads the page. Make the hint accurate.
* Come up with a better hint mechanism. Right now there are still hundreds of combos that would total to any given sum.

### Part Two: The Checkboxes Pattern Board

###### Core features:
0. BEFORE fixing this component, make sure you understand how the checkboxing works. The CSS is written so that if a div has both "checkbox" and "true" in it's class list, it will be styled with a check. Otherwise, it will be rendered  without one. 
1.

###### Stretch features:
*

### Part Three: The ColorCaptcha Slider Test

###### Core features:
1.

###### Stretch features:
*

### BONUS Part Four: The Slider Puzzle

This last part was built, but never finished, and it isn't included in the `App.js` file yet. The actual sliding mechanic is already built out, but the answer key and some other features (including the `winning()` function to see if the puzzle is finished correctly) still need to be built out.
