This project was created for Phase 3 React project in Digitalcrafts. [Project Requirements](https://github.com/oakmac/phase3-react-project-requirements)

## URL 
https://othello-game-react.firebaseapp.com/

## Created By
[Kazue Sasatani](http://www.segakazue.com)

## What is Othello/Reversi?
Othello/Reversi is a strategy board game for two players, played on an 8×8 uncheckered board. There are sixty-four identical game pieces called disks (often spelled "discs"), which are light on one side and dark on the other. Players take turns placing disks on the board with their assigned color facing up. During a play, any disks of the opponent's color that are in a straight line and bounded by the disk just placed and another disk of the current player's color are turned over to the current player's color. [Wikipedia](https://en.wikipedia.org/wiki/Reversi)

## How to Play Othello/Reversi
#### Link to Youtube video
[![How to Play Othello](https://img.youtube.com/vi/Ol3Id7xYsY4/0.jpg)](https://www.youtube.com/watch?v=Ol3Id7xYsY4 "How to Play Othello")

## Technologies/Libraries
|　Name　| Usage | 
|:--|:--|
| [create-react-app](https://create-react-app.dev/docs/getting-started/) | A tool that gives you a massive head start when building React apps | 
| [react](https://reactjs.org/) | Web Framework |
| [redux](https://redux.js.org/) | State management |
| [react-redux](https://react-redux.js.org/) | Connecting redux state management to react |
| [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) | URL routing |
| [react-bootstrap](https://react-bootstrap.github.io/) | UI design |
| [firebase](https://firebase.google.com/) | Hosting, Authentication and Database |


## React-Redux
### Actions 
|　#　| Name | Reducer | Description | 
|:--|:--|:--|:--|
| 1 | START_GAME | othelloGame | Start a new othello game |
| 2 | PUT_A_PIECE | othelloGame  | Put a new disc on the board and flip discs |
| 3 | CLOSE_MODAL | othelloGame | Close modal that opens when the game is finished |
| 4 | PLAY_AGAIN | othelloGame  | Restart othello game after one game is done|
| 5 | SCREEN_RESIZE | othelloStyle | Triggered when the screen is resized. Calculate board size and cell size and adjust them. |

### Initial State
#### 1. othelloGame
~~~js
const getInitialPositions = () => {
  const initialPositions = [
    { row: 3, col: 3, color: LIGHT, isFlipped: false, isPlaced: false },
    { row: 3, col: 4, color: DARK, isFlipped: false, isPlaced: false },
    { row: 4, col: 3, color: DARK, isFlipped: false, isPlaced: false },
    { row: 4, col: 4, color: LIGHT, isFlipped: false, isPlaced: false }
  ]
  return JSON.parse(JSON.stringify(initialPositions))
}

const initialState = {
  status: NOT_STARTED,
  isCompleted: false,
  showModal: false,
  positions: getInitialPositions(),
  player: DARK,
  darkCount: 2,
  lightCount: 2,
  message: null
}
~~~
#### 2. othelloStyle
~~~js
const calcCellSize = (areaWidth, areaHeight) => {
  return Math.min(areaWidth, areaHeight) * 0.9 / 8
}

const initialAreaSize = {
  width: typeof window === 'object' ? window.innerWidth : 500,
  height:
    typeof window === 'object' ? window.innerHeight - (NAVBAR_HEIGHT_PX * 2) : 500
}

const initialState = {
  gameAreaWidth: initialAreaSize.width,
  gameAreaHeight: initialAreaSize.height,
  cellSize: calcCellSize(initialAreaSize.width, initialAreaSize.height)
}
~~~

### React Components 

|　#　| Name | Usage | Stateful? |
|:--|:--|:--|:--| 
| 1 | CoverPage | For cover page | No |
| 2 | OthelloBoard | For othello board| No |
| 3 | OthelloGridRow | For rows of othello board | No |
| 4 | OthelloGridCol | For columns of othello board | No |
| 5 | OthelloCell | For cells of othello board | No |
| 6 | OthelloDisc | For discs on othello board | No |
| 7 | OthelloDisc | For discs on othello board | No |
| 8 | OthelloMain | For othello game page | Yes |
| 9 | OthelloModal | For modal which opens when the game is finished | No |
| 10 | Player | Signs or players | No |


## Difficulties
* Make a logic to flip discs. Especially diagonal direction. 
* Board and cell size adjustment for different media and resizing screen
* Firebase authentication and database connection. I'm still working on...


## References
* [What is Redux Ducks?](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7)
* [A Firebase in React Tutorial for Beginners](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial)
