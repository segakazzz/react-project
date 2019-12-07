import { PUT_A_PIECE } from './actionTypes'

export const putPiece = (row, col, color) => {
  return {
      type : PUT_A_PIECE,
      row : row,
      col : col
  }
}
