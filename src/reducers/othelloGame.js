import { DARK, LIGHT } from './player'
import {
  PUT_A_PIECE,
  CLOSE_MODAL,
  START_GAME,
  PLAY_AGAIN
} from '../actions/actionTypes'
import { NOT_STARTED, LIGHT_WON, DARK_WON, DRAW, PLAYING } from './statusTypes'

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
  lightCount: 2
}

const BreakException = {}
const isAllowed = (row, col, positions, isCompleted) => {
  if (isCompleted) return false
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

const getPrevTarget = (array, baseIndex, player) => {
  // console.log('baseIndex', baseIndex)
  for (let i = baseIndex - 1; i >= 0; i--) {
    if (array[i] === null) return Number.NEGATIVE_INFINITY
    else if (array[i] === player) return i
    else continue
  }
  return Number.NEGATIVE_INFINITY
}

const getNextTarget = (array, baseIndex, player) => {
  for (let i = baseIndex + 1; i < array.length; i++) {
    if (array[i] === null) return Number.POSITIVE_INFINITY
    else if (array[i] === player) return i
    else continue
  }
  return Number.POSITIVE_INFINITY
}

const updateHorizonal = (row, col, player, positions) => {
  const horizonalPositions = positions.filter(obj => obj.col === col)
  const arr = [...Array(8).keys()].map(idx => {
    const foundObj = horizonalPositions.find(obj => obj.row === idx)
    return foundObj !== undefined ? foundObj.color : null
  })
  const prevTarget = getPrevTarget(arr, row, player)
  const nextTarget = getNextTarget(arr, row, player)
  positions.map(obj => {
    if (obj.col === col && obj.color !== player) {
      if (isFinite(prevTarget) && prevTarget < obj.row && obj.row < row) {
        obj.color = player
        obj.isFlipped = true
      }
      if (isFinite(nextTarget) && row < obj.row && obj.row < nextTarget) {
        obj.color = player
        obj.isFlipped = true
      }
    }
    return obj
  })
}

const updateVertical = (row, col, player, positions) => {
  const verticalPositions = positions.filter(obj => obj.row === row)
  const arr = [...Array(8).keys()].map(idx => {
    const foundObj = verticalPositions.find(obj => obj.col === idx)
    return foundObj !== undefined ? foundObj.color : null
  })
  const prevTarget = getPrevTarget(arr, col, player)
  const nextTarget = getNextTarget(arr, col, player)
  positions.map(obj => {
    if (obj.row === row && obj.color !== player) {
      if (isFinite(prevTarget) && prevTarget < obj.col && obj.col < col) {
        obj.color = player
        obj.isFlipped = true
      }
      if (isFinite(nextTarget) && col < obj.col && obj.col < nextTarget) {
        obj.color = player
        obj.isFlipped = true
      }
    }
    return obj
  })
}

const updateDiagonalTopLeft2BottomRight = (row, col, player, positions) => {
  const diagonalPositions = positions.filter(obj => {
    return obj.row - obj.col === row - col
  })
  const arraySize = 8 - Math.abs(row - col)
  const baseIndex = row < col ? row : col

  const arr = [...Array(arraySize).keys()].map(idx => {
    const foundObj = diagonalPositions.find(obj => {
      if (obj.row < obj.col) return obj.row === idx
      else return obj.col === idx
    })
    return foundObj !== undefined ? foundObj.color : null
  })
  // console.log('updateDiagonalTopLeft2BottomRight', arr)
  // console.log('arraySize', arraySize, 'baseIndex', baseIndex)

  const prevTarget = getPrevTarget(arr, baseIndex, player)
  const nextTarget = getNextTarget(arr, baseIndex, player)
  // console.log(prevTarget, nextTarget)
  positions.map(obj => {
    if (obj.row - obj.col === row - col && obj.color !== player) {
      const base = obj.row < obj.col ? obj.row : obj.col
      // console.log(obj, base)
      if (isFinite(prevTarget) && prevTarget < base && base < baseIndex) {
        obj.color = player
        obj.isFlipped = true
      }
      if (isFinite(nextTarget) && baseIndex < base && base < nextTarget) {
        obj.color = player
        obj.isFlipped = true
      }
    }
    return obj
  })
}

const updateDiagonalBottomLeft2TopRight = (row, col, player, positions) => {
  const diagonalPositions = positions.filter(obj => {
    return obj.row + obj.col === row + col
  })
  // console.log(diagonalPositions)
  const arraySize = row + col <= 7 ? row + col + 1 : 15 - (row + col)
  const baseIndex = row + col <= 7 ? col : col - (8 - arraySize)

  const arr = [...Array(arraySize).keys()].map(idx => {
    const foundObj = diagonalPositions.find(obj => {
      if (obj.row + obj.col <= 7) return obj.col === idx
      else return obj.col === idx + (8 - arraySize)
    })
    return foundObj !== undefined ? foundObj.color : null
  })

  // console.log('updateDiagonalBottomLeft2TopRight', arr)
  // console.log('arraySize', arraySize, 'baseIndex', baseIndex)
  const prevTarget = getPrevTarget(arr, baseIndex, player)
  const nextTarget = getNextTarget(arr, baseIndex, player)
  // console.log(prevTarget, nextTarget)
  positions.map(obj => {
    if (obj.row + obj.col === row + col && obj.color !== player) {
      // console.log(obj)
      const base = obj.row + obj.col <= 7 ? obj.col : obj.col - (8 - arraySize)
      // console.log(base)
      if (isFinite(prevTarget) && prevTarget < base && base < baseIndex) {
        obj.color = player
        obj.isFlipped = true
      }
      if (isFinite(nextTarget) && baseIndex < base && base < nextTarget) {
        obj.color = player
        obj.isFlipped = true
      }
    }
    return obj
  })
}

const updatePositions = (row, col, player, positions) => {
  updateHorizonal(row, col, player, positions)
  updateVertical(row, col, player, positions)
  updateDiagonalTopLeft2BottomRight(row, col, player, positions)
  updateDiagonalBottomLeft2TopRight(row, col, player, positions)
}

const updateStatus = state => {
  const { positions } = state
  const darkCount = positions.filter(obj => obj.color === DARK).length
  const lightCount = positions.filter(obj => obj.color === LIGHT).length
  if (positions.length === 64 || darkCount === 0 || lightCount === 0) {
    if (darkCount > lightCount) state.status = DARK_WON
    else if (lightCount > darkCount) state.status = LIGHT_WON
    else state.status = DRAW
  } else if (positions.length === 4) state.status = NOT_STARTED
  else if (positions.length > 4 && positions.length < 64) state.status = PLAYING
  else throw Error('Unable to get status...')
  state.isCompleted = state.status !== NOT_STARTED && state.status !== PLAYING
  state.showModal = state.isCompleted
  state.darkCount = darkCount
  state.lightCount = lightCount
}

// const deepCopy = obj => JSON.parse(JSON.stringify(obj))

export default (state = initialState, action) => {
  const { type } = action
  // console.log(action)
  const newState = {...state}
  switch (type) {
    case PUT_A_PIECE:
      const { row, col } = action
      newState.positions = newState.positions.map(obj => ({...obj, isPlaced: false, isFlipped: false}))
      // check if the position is allowed
      if (isAllowed(row, col, newState.positions, newState.isCompleted)) {
        // console.log('allowed', row, col)
        newState.positions.push({ row: row, col: col, color: newState.player, isPlaced: true, isFlipped: false })
        updatePositions(row, col, newState.player, newState.positions)
        newState.player = !newState.player
        updateStatus(newState)
      } else {
        // console.log('not allowed', row, col)
      }
      break

    case CLOSE_MODAL:
      newState.showModal = false
      break

    case START_GAME:
      newState.status = PLAYING
      break

    case PLAY_AGAIN:
      // console.log(initialState)
      const resetStatus = {
        ...initialState,
        status: PLAYING,
        positions: getInitialPositions()
      }
      // console.log(resetStatus)
      return resetStatus

    default:
      break
  }
  return newState
}
