import { PUT_A_PIECE, SCREEN_RESIZE } from './actionTypes'

export const putPiece = (row, col) => {
  return {
    type: PUT_A_PIECE,
    row: row,
    col: col
  }
}

export const gameAreaResize = (width, height) => {
  return {
    type: SCREEN_RESIZE,
    screenWidth: width,
    screenHeight: height
  }
}
