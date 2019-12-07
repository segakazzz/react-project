import { DARK, LIGHT } from './player'
import { PUT_A_PIECE } from '../actions/actionTypes'
import { NOT_STARTED, LIGHT_WON, DARK_WON, DRAW, PLAYING} from './statusTypes'

const initialState = {
  status: NOT_STARTED,
  isCompleted: false,
  positions: [
    { row: 3, col: 3, color: LIGHT },
    { row: 3, col: 4, color: DARK },
    { row: 4, col: 3, color: DARK },
    { row: 4, col: 4, color: LIGHT }
  ],
  player: DARK
}

const BreakException = {}
const isAllowed = (row, col, positions) => {
  let isAllowed = false
  try {
    // Check if duplicated
    positions.forEach(position => {
      if (position.row === row && position.col === col) {
        throw BreakException
      }
    })

    // Check if the position is allowed
    positions.forEach(position => {
      const diffX = Math.abs(row - position.row)
      const diffY = Math.abs(col - position.col)
      if (diffX <= 1 && diffY <= 1) {
        isAllowed = true
        throw BreakException
      }
    })
  } catch (e) {
    if (e !== BreakException) throw e
  }
  return isAllowed
}

const updateHorizonal = (row, col, player, positions) => {
  const holizonalPositions = positions.filter(
    obj => obj.col === col && obj.color === player
  )
  const rowArray = holizonalPositions.map(obj => obj.row)
  const prevRow = Math.max(...rowArray.filter(val => val < row))
  const nextRow = Math.min(...rowArray.filter(val => val > row))
  positions.map(obj => {
    if (obj.col === col && obj.color !== player) {
      if (isFinite(prevRow) && prevRow < obj.row && obj.row < row) { obj.color = player }
      if (isFinite(nextRow) && row < obj.row && obj.row < nextRow) { obj.color = player }
    }
    return obj
  })
}

const updateVertical = (row, col, player, positions) => {
  const verticalPositions = positions.filter(
    obj => obj.row === row && obj.color === player
  )
  const colArray = verticalPositions.map(obj => obj.col)
  const prevCol = Math.max(...colArray.filter(val => val < col))
  const nextCol = Math.min(...colArray.filter(val => val > col))
  positions.map(obj => {
    if (obj.row === row && obj.color !== player) {
      if (isFinite(prevCol) && prevCol < obj.col && obj.col < col) { obj.color = player }
      if (isFinite(nextCol) && col < obj.col && obj.col < nextCol) { obj.color = player }
    }
    return obj
  })
}

const updateDiagonalLeft2Right = (row, col, player, positions) => {
  const diagonalPositions = positions.filter(obj => {
    return obj.row - obj.col === row - col && obj.color === player
  })
  const sumArray = diagonalPositions.map(obj => obj.row)
  const prevRow = Math.max(...sumArray.filter(val => val < row))
  const nextRow = Math.min(...sumArray.filter(val => val > row))
  positions.map(obj => {
    if (obj.row - obj.col === row - col && obj.color !== player) {
      if (isFinite(prevRow) && prevRow < obj.row && obj.row < row) { obj.color = player }
      if (isFinite(nextRow) && row < obj.row && obj.row < nextRow) { obj.color = player }
    }
    return obj
  })
}

const updateDiagonalRight2Left = (row, col, player, positions) => {
  const diagonalPositions = positions.filter(obj => {
    return obj.row + obj.col === row + col && obj.color === player
  })
  const sumArray = diagonalPositions.map(obj => obj.row)
  const prevRow = Math.max(...sumArray.filter(val => val < row))
  const nextRow = Math.min(...sumArray.filter(val => val > row))
  positions.map(obj => {
    if (obj.row + obj.col === row + col && obj.color !== player) {
      if (isFinite(prevRow) && prevRow < obj.row && obj.row < row) { obj.color = player }
      if (isFinite(nextRow) && row < obj.row && obj.row < nextRow) { obj.color = player }
    }
    return obj
  })
}

const updatePositions = (row, col, player, positions) => {
  updateHorizonal(row, col, player, positions)
  updateVertical(row, col, player, positions)
  updateDiagonalLeft2Right(row, col, player, positions)
  updateDiagonalRight2Left(row, col, player, positions)
}

const updateStatus = (state) => {
  const {positions} = state
  const darkCount = positions.filter(obj=> obj.color === DARK).length
  const lightCount = positions.filter(obj=> obj.color === LIGHT).length
  if (positions.length === 64 ||  darkCount === 0 || lightCount === 0){
    if (darkCount > lightCount) state.status = DARK_WON
    else if (lightCount > darkCount) state.status = LIGHT_WON
    else state.status = DRAW
  } 
  else if (positions.length === 4) state.status = NOT_STARTED
  else if (positions.length > 4 && positions.length < 64) state.status = PLAYING
  else throw Error('Unable to get status...')
  state.isCompleted = state.status !== NOT_STARTED && state.status !== PLAYING 
}

export default (state = initialState, action) => {
  const { type } = action
  // console.log(action)
  const newState = { ...state }
  switch (type) {
    case PUT_A_PIECE:
      const { row, col } = action
      // check if the position is allowed
      if (isAllowed(row, col, newState.positions)) {
        // console.log('allowed', row, col)
        newState.positions.push({ row: row, col: col, color: newState.player })
        updatePositions(row, col, newState.player, newState.positions)
        newState.player = !newState.player
        updateStatus(newState)
      } else {
        // console.log('not allowed', row, col)
      }      
      break
    default:
      break
  }
  return newState
}
