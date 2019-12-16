import { NAVBAR_HEIGHT_PX } from '../constants'

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

export const SCREEN_RESIZE = 'SCREEN_RESIZE'

export const gameAreaResize = (width, height) => {
  return {
    type: SCREEN_RESIZE,
    screenWidth: width,
    screenHeight: height
  }
}

export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case SCREEN_RESIZE:
      const gameAreaHeight = action.screenHeight - (NAVBAR_HEIGHT_PX * 2)
      const gameAreaWidth = action.screenWidth
      return Object.assign({}, state, {
        gameAreaWidth: gameAreaWidth,
        gameAreaHeight: gameAreaHeight,
        cellSize: calcCellSize(gameAreaWidth, gameAreaHeight)
      })
    default:
      return state
  }
}
