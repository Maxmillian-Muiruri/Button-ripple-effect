# Button Ripple Effect Project

A simple interactive button with a ripple effect that originates from the mouse position.

## Features

- Clean, modern button design
- Smooth ripple animation on hover
- Ripple effect originates from mouse position
- Pure CSS/JavaScript implementation

## How It Works

1. The button uses CSS pseudo-elements (`::before`) to create the ripple effect
2. JavaScript calculates the mouse position relative to the button
3. CSS variables (`--xpos`, `--ypos`) position the ripple origin
4. CSS transitions animate the ripple expansion

## Technologies Used

- HTML5
- CSS3 (variables, transitions, pseudo-elements)
- Vanilla JavaScript

## Usage

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Hover over the button to see the ripple effect

## Code Structure

- `index.html`: Contains the button element
- `index.css`: Styles the button and implements ripple animation
- `index.js`: Handles mouse position tracking
