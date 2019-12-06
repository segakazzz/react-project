import { DARK, LIGHT } from './player'

const initialState = {
  status: 'NOT_STARTED',
  positions: [
    { row: 3, col: 3, color: LIGHT },
    { row: 3, col: 4, color: DARK },
    { row: 4, col: 3, color: DARK },
    { row: 4, col: 4, color: LIGHT }
  ],
  player: DARK
}

export default (state = initialState, action) => {
  const { type } = action
  const newState = { ...state }
  switch (type) {
    case 'PUT_A_PIECE':
      break
    default:
      break
  }
  console.log(type)
  return newState
}
