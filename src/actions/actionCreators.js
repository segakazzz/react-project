import { PUT_A_PIECE, SCREEN_RESIZE, CLOSE_MODAL, START_GAME, PLAY_AGAIN } from './actionTypes'

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

export const closeModal = () => {
  return {
    type : CLOSE_MODAL
  }
}

export const startGame = () => {
  return {
    type : START_GAME
  }
}

export const playAgain = () => {
  return {
    type : PLAY_AGAIN
  }
}
